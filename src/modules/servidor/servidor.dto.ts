import { IsNotEmpty } from 'class-validator';

export class ServidorDto {
  @IsNotEmpty({ message: 'O campo Nome é obrigatório' })
  nome: string;

  @IsNotEmpty({ message: 'O campo CPF é obrigatório' })
  cpf: string;
}
