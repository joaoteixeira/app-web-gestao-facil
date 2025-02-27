import { Injectable } from '@nestjs/common';
import { Servidor } from './servidor.entity';

@Injectable()
export class ServidorService {
    async getAll() {
        return await Servidor.find({
            relations: ['campus'],
            order: { nome: 'ASC' }
        });
    }

    async findOneById(id: number) {
        return await Servidor.findOne({ 
            where: { id }, 
            relations: ['campus'] 
        });
    }

    async create(dados: any) {
        const servidor = Servidor.create({ ...dados });

        return await servidor.save();
    }

    async update(id: number, dados: any) {
        const servidor = await this.findOneById(id);

        if (!servidor) {
            return null;
        }

        return await Servidor.update(id, { ...dados });
    }

    async delete(id: number) {
        const servidor = await this.findOneById(id);

        if (!servidor) {
            return null;
        }

        return await Servidor.delete(id);
    }
}
