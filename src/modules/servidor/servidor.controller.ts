import { Controller, Get, Post, Render } from '@nestjs/common';
import { ServidorService } from './servidor.service';

@Controller('servidores')
export class ServidorController {
    constructor(private readonly service: ServidorService) {}

    @Get()
    @Render('servidor/index')
    index() {
        return { servidores: this.service.getAll() };
        // return { servidores: [] };
    }

    //Rota de Cadastro
    //Abrir o formulario
    @Get('novo')
    @Render('servidor/form')
    createForm() {
        return {};
    }

    //Rota para Salvar os dados de cadastro
    @Post('novo')
    createSave() {
        return {};
    }

    //Rota de Atualização (Update)
    //Abrir o formulario
    @Get(':id/atualizacao')
    @Render('servidor/form')
    updateForm() {
        return {};
    }
    //Rota para Salvar os dados de atualização

    //Rota de Confirmação de Exclusão (Update)
    //Abrir o formulario

    //Rota para Excluir
}

//criar um novo modulo
//npx nest g mo servidor modules

//criar um novo controller
//npx nest g co servidor modules

//criar um novo service
//npx nest g s servidor modules