import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class TypeormUserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;
}
