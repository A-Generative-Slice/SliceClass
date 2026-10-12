import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Chapter } from './chapter.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  duration: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // Full lesson body (HTML). Used for text-based lessons until videos are uploaded.
  @Column({ type: 'text', nullable: true })
  content: string;

  @Column({ nullable: true })
  sourceMaterial: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.lessons, { onDelete: 'CASCADE' })
  chapter: Chapter;
}
