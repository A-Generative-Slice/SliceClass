import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Chapter } from './chapter.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // Stable identifier for courses that are seeded from code (see courses/seed).
  @Column({ nullable: true })
  slug: string;

  // Which version of the seed content is currently stored in the database.
  @Column({ default: 0 })
  seedVersion: number;

  @Column({ nullable: true })
  instructor: string;

  @Column({ nullable: true })
  trailer: string;

  @Column({ nullable: true })
  thumbnail: string;

  @Column({ default: 80 })
  passPercentage: number;

  @Column({ type: 'float', default: 0 })
  price: number;

  @Column({ type: 'float', nullable: true })
  originalPrice: number;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ default: 0 })
  students: number;

  @Column({ nullable: true })
  duration: string;

  @Column({ default: 0 })
  totalLessons: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'simple-array', nullable: true })
  tags: string[];

  @OneToMany(() => Chapter, (chapter) => chapter.course, { cascade: true, eager: true })
  chapters: Chapter[];
}
