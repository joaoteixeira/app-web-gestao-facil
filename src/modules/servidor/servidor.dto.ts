import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumberString, Min, MinLength } from "class-validator";

export class ServidorDto {
    @IsNotEmpty({ message: 'O nome é obrigatório' })
    @MinLength(5, { message: 'O nome deve ter minímo 5 caracteres' })
    nome: string;

    @IsNotEmpty({ message: 'O CPF é obrigatório' })
    cpf: string;

    @IsNotEmpty({ message: 'O siape é obrigatório' })
    siape: string;

    @IsNotEmpty({ message: 'A seleção de um campus é obrigatório' })
    @IsNumberString({}, { message: 'A seleção de um campus é obrigatório' })
    campus: number;
}

export class ServidorUpdateDto extends PartialType(ServidorDto) { }