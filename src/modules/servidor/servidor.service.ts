import { Injectable } from '@nestjs/common';
import { Servidor } from './servidor.entity';

@Injectable()
export class ServidorService {
  async getAll() {
    return await Servidor.find();
  }

  async create(data: any) {
    const servidor = Servidor.create({ ...data });

    return await servidor.save();
  }
}
