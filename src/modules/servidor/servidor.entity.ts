import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Campus } from '../campus/campus.entity';

@Entity()
export class Servidor extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id_ser' })
  id!: number;

  @Column({ name: 'nome_ser' })
  nome: string;

  @Column({ name: 'cpf_ser' })
  cpf: string;

  @Column({ name: 'siape_ser' })
  siape: number;

  @ManyToOne(() => Campus, (campus) => campus.servidores)
  @JoinColumn({ name: 'id_cam_fk', referencedColumnName: 'id' })
  campus: Campus;
}
