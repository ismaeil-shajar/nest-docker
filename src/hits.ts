import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hits: number;

  @Column()
  lasthits: number;
}