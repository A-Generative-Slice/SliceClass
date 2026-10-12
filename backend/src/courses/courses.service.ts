import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { Course } from './entities/course.entity';
import { Chapter } from './entities/chapter.entity';
import { Lesson } from './entities/lesson.entity';
import { COURSE1, COURSE1_SEED_VERSION } from './seed/course1.content';
import { User } from '../auth/entities/user.entity';

// Title used by the original seeded course, so the existing live row gets upgraded in place.
const LEGACY_COURSE1_TITLE = 'Comprehensive Lighting Design Course';

@Injectable()
export class CoursesService implements OnModuleInit {
  private readonly dataPath = path.join(process.cwd(), 'data', 'courses.json');

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    this.ensureDataDirectory();
    await this.migrateFromJsonIfNeeded();
    await this.syncSeedCourse();
  }

  private ensureDataDirectory() {
    const dir = path.dirname(this.dataPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  // Legacy: import courses from data/courses.json into an empty database.
  private async migrateFromJsonIfNeeded() {
    const courseCount = await this.courseRepository.count();
    if (courseCount > 0 || !fs.existsSync(this.dataPath)) return;
    console.log('Database empty. Migrating from courses.json...');
    try {
      const coursesToMigrate: any[] = JSON.parse(fs.readFileSync(this.dataPath, 'utf8'));
      for (const c of coursesToMigrate) {
        const course = this.courseRepository.create({
          ...c,
          chapters: c.chapters.map(ch => ({
            ...ch,
            lessons: ch.lessons.map(l => ({ ...l }))
          }))
        });
        await this.courseRepository.save(course);
      }
      console.log(`Successfully migrated ${coursesToMigrate.length} courses.`);
    } catch (error) {
      console.error('Migration failed:', error);
    }
  }

  /**
   * Keeps the LITELAB course (courses/seed/course1.content.ts) in the database.
   * Runs on every boot but only writes when COURSE1_SEED_VERSION is newer than
   * what is stored, so admin edits are kept until the seed file is bumped.
   * Existing chapter/lesson rows are updated in place to keep their ids stable.
   */
  private async syncSeedCourse() {
    try {
      const relations = ['chapters', 'chapters.lessons'];
      let course =
        (await this.courseRepository.findOne({ where: { slug: COURSE1.slug }, relations })) ||
        (await this.courseRepository.findOne({ where: { title: LEGACY_COURSE1_TITLE }, relations }));

      if (course && (course.seedVersion || 0) >= COURSE1_SEED_VERSION) return;

      if (!course) {
        course = this.courseRepository.create({
          thumbnail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
          trailer: '/trailer.mp4',
          passPercentage: 80,
          price: 299,
          originalPrice: 499,
          rating: 4.9,
          students: 0,
          chapters: [],
        });
      }

      const { chapters: seedChapters, ...seedCourseFields } = COURSE1;
      Object.assign(course, seedCourseFields, { seedVersion: COURSE1_SEED_VERSION });

      const byId = (a: { id: number }, b: { id: number }) => a.id - b.id;
      const existingChapters = [...(course.chapters || [])].sort(byId);
      const extraChapters = existingChapters.slice(seedChapters.length);
      const extraLessons: Lesson[] = [];

      course.chapters = seedChapters.map((seedCh, i) => {
        const chapter = existingChapters[i] || this.chapterRepository.create({ quiz: [] });
        chapter.title = seedCh.title;
        chapter.objective = seedCh.objective;
        const existingLessons = [...(chapter.lessons || [])].sort(byId);
        extraLessons.push(...existingLessons.slice(seedCh.lessons.length));
        chapter.lessons = seedCh.lessons.map((seedLesson, j) => {
          const lesson = existingLessons[j] || this.lessonRepository.create();
          Object.assign(lesson, seedLesson);
          return lesson;
        });
        return chapter;
      });

      if (extraLessons.length) await this.lessonRepository.remove(extraLessons);
      if (extraChapters.length) await this.chapterRepository.remove(extraChapters);
      await this.courseRepository.save(course);
      console.log(`Seed course "${COURSE1.title}" synced (v${COURSE1_SEED_VERSION}, ${COURSE1.totalLessons} lessons).`);
    } catch (error) {
      console.error('Seed course sync failed:', error);
    }
  }

  async getCourses() {
    return this.courseRepository.find({
      relations: ['chapters', 'chapters.lessons'],
      order: {
        chapters: {
          id: 'ASC',
          lessons: {
            id: 'ASC'
          }
        }
      }
    });
  }

  async upsertCourse(courseData: any) {
    if (courseData.id) {
      // For updates, we use preload to merge changes including relations
      const course = await this.courseRepository.preload(courseData);
      if (!course) throw new Error(`Course #${courseData.id} not found`);
      return await this.courseRepository.save(course);
    } else {
      const nested = this.courseRepository.create(courseData);
      return await this.courseRepository.save(nested);
    }
  }

  async deleteCourse(id: number) {
    return await this.courseRepository.delete(id);
  }

  async enrollUser(userId: number, courseId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['enrolledCourses'] });
    if (!user) throw new Error('User not found');
    
    const course = await this.courseRepository.findOne({ where: { id: courseId } });
    if (!course) throw new Error('Course not found');
    
    if (!user.enrolledCourses) user.enrolledCourses = [];
    
    // Check if already enrolled
    if (!user.enrolledCourses.find(c => c.id === courseId)) {
      user.enrolledCourses.push(course);
      await this.userRepository.save(user);
    }
    
    return { success: true };
  }
}
