import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, Min, MinLength } from "class-validator";

export class ServidorDto {
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(5, { message: 'O nome deve ter minímo 5 caracteres' })
    nome: string;

    @IsNotEmpty({ message: 'O CPF é obrigatório' })
    cpf: string;

    @IsNotEmpty({ message: 'O siape é obrigatório' })
    siape: string;
}

export class ServidorUpdateDto extends PartialType(ServidorDto) { }