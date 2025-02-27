import { Body, Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { ServidorService } from './servidor.service';
import { Response } from 'express';
import { ServidorValidator } from './servidor.validator';
import { setFlashErrors, setOld } from 'src/common/helpers/flash-errors';
import { CampusService } from '../campus/campus.service';

@Controller('servidores')
export class ServidorController {
    constructor(
        private readonly service: ServidorService, 
        private readonly campusService: CampusService
    ) { }

    @Get()
    @Render('servidor/index')
    async index() {
        return { servidores: await this.service.getAll() };
    }

    //Rota de Cadastro
    //Abrir o formulario
    @Get('novo')
    @Render('servidor/form')
    async createForm() {
        const campi = await this.campusService.getAll();

        return { campi };
    }

    @Post('novo')
    async createSave(@Body() dados, @Res() response: Response, @Req() request) {
        try {
            const validador = await new ServidorValidator().validate(dados);

            if (validador.isError) {
                setFlashErrors(request, validador.getErrors);
                setOld(request, dados);

                return response.redirect('/servidores/novo');
            }

            await this.service.create(validador.getData);

        } catch { }

        return response.redirect('/servidores');
    }

    //Rota de Atualização (Update)
    //Abrir o formulario
    @Get(':id/atualizacao')
    async updateForm(@Param('id') id: number, @Res() response: Response, @Req() request) {
        try {
            const servidor = await this.service.findOneById(id);

            if (!servidor) {
                setFlashErrors(request, ['O servidor selecionado não foi encontrado! Tente novamente.']);
                return response.redirect('/servidores');
            }

            const campi = await this.campusService.getAll();

            return response.render('servidor/form', { servidor, campi });
        } catch {
            setFlashErrors(request, ['Ocorreram erros ao buscar informações.']);
            return response.redirect('/servidores');
        }
    }


    @Post(':id/atualizacao')
    async updateSave(@Param('id') id: number, @Body() dados, @Res() response: Response, @Req() request) {
        try {
            const validador = await new ServidorValidator().validate(dados, true);

            if (validador.isError) {
                setFlashErrors(request, validador.getErrors);
                setOld(request, dados);

                return response.redirect(`/servidores/${id}/atualizacao`);
            }

            const result = await this.service.update(id, validador.getData);

            if (!result) {
                setFlashErrors(request, ['Informações não foram atualizadas! Tente novamente']);

                return response.redirect(`/servidores`);
            }

        } catch { }

        return response.redirect('/servidores');
    }

    @Get(':id/exclusao')
    async delete(@Param('id') id: number, @Res() response: Response, @Req() request) {
        try {
            const servidor = await this.service.findOneById(id);

            if (!servidor) {
                setFlashErrors(request, ['O servidor selecionado não foi encontrado! Tente novamente.']);
            }

            const result = await this.service.delete(id);

            if (!result) {
                setFlashErrors(request, ['Informações não foram atualizadas! Tente novamente']);
            }
        } catch {
            setFlashErrors(request, ['Ocorreram erros ao buscar informações.']);
        } finally {
            return response.redirect(`/servidores`);
        }
    }
}

//criar um novo modulo
//npx nest g mo servidor modules

//criar um novo controller
//npx nest g co servidor modules

//criar um novo service
//npx nest g s servidor modules