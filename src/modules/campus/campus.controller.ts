import { Body, Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { setFlashErrors, setOld } from 'src/common/helpers/flash-errors';
import { CampusService } from './campus.service';

@Controller('campus')
export class CampusController {
    constructor(private readonly service: CampusService) { }

    @Get()
    @Render('campus/index')
    async index() {
        return { campi: await this.service.getAll() };
    }


    @Get('novo')
    @Render('campus/form')
    createForm() {
        return {};
    }

    @Post('novo')
    async createSave(@Body() dados, @Res() response: Response, @Req() request) {
        // try {
        //     const validador = await new ServidorValidator().validate(dados);

        //     if (validador.isError) {
        //         setFlashErrors(request, validador.getErrors);
        //         setOld(request, dados);

        //         return response.redirect('/servidores/novo');
        //     }

        //     await this.service.create(validador.getData);

        // } catch { }

        return response.redirect('/campus');
    }


    @Get(':id/atualizacao')
    async updateForm(@Param('id') id: number, @Res() response: Response, @Req() request) {
        // try {
        //     const servidor = await this.service.findOneById(id);

        //     if (!servidor) {
        //         setFlashErrors(request, ['O servidor selecionado não foi encontrado! Tente novamente.']);
        //         return response.redirect('/servidores');
        //     }

        //     return response.render('servidor/form', { servidor });
        // } catch {
        //     setFlashErrors(request, ['Ocorreram erros ao buscar informações.']);
        //     return response.redirect('/servidores');
        // }
    }


    @Post(':id/atualizacao')
    async updateSave(@Param('id') id: number, @Body() dados, @Res() response: Response, @Req() request) {
        // try {
        //     const validador = await new ServidorValidator().validate(dados, true);

        //     if (validador.isError) {
        //         setFlashErrors(request, validador.getErrors);
        //         setOld(request, dados);

        //         return response.redirect(`/servidores/${id}/atualizacao`);
        //     }

        //     const result = await this.service.update(id, validador.getData);

        //     if (!result) {
        //         setFlashErrors(request, ['Informações não foram atualizadas! Tente novamente']);

        //         return response.redirect(`/servidores`);
        //     }

        // } catch { }

        // return response.redirect('/servidores');
    }

    @Get(':id/exclusao')
    async delete(@Param('id') id: number, @Res() response: Response, @Req() request) {
        // try {
        //     const servidor = await this.service.findOneById(id);

        //     if (!servidor) {
        //         setFlashErrors(request, ['O servidor selecionado não foi encontrado! Tente novamente.']);
        //     }

        //     const result = await this.service.delete(id);

        //     if (!result) {
        //         setFlashErrors(request, ['Informações não foram atualizadas! Tente novamente']);
        //     }
        // } catch {
        //     setFlashErrors(request, ['Ocorreram erros ao buscar informações.']);
        // } finally {
        //     return response.redirect(`/servidores`);
        // }
    }
}
