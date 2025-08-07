import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class TypeormUserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;
}
