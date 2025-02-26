import { Injectable } from '@nestjs/common';
import { Campus } from './campus.entity';

@Injectable()
export class CampusService {
    async getAll() {
        return await Campus.find({
            order: { nome: 'ASC' }
        });
    }

    async findOneById(id: number) {
        return await Campus.findOne({ where: { id: id  } });
    }

    async create(dados: any) {
        const campus = Campus.create({ ...dados });

        return await campus.save();
    }

    async update(id: number, dados: any) {
        const campus = await this.findOneById(id);

        if (!campus) {
            return null;
        }

        return await Campus.update(id, { ...dados });
    }

    async delete(id: number) {
        const campus = await this.findOneById(id);

        if (!campus) {
            return null;
        }

        return await Campus.delete(id);
    }
}
