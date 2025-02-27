import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Servidor } from '../servidor/servidor.entity';

@Entity('campus')
export class Campus extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_cam' })
  id!: number;

  @Column({ name: 'nome_cam' })
  nome: string;

  @OneToMany(() => Servidor, (servidor) => servidor.campus)
  servidores: Servidor[]
}
