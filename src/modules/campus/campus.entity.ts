import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Campus extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_cam' })
  id!: number;

  @Column({ name: 'nome_cam' })
  nome: string;
}
