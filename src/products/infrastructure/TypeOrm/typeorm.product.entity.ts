import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
export class TypeormProductEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;
}
