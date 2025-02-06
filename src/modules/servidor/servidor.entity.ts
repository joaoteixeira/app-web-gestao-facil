import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
