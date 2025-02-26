import { Module } from '@nestjs/common';
import { ServidorController } from './servidor.controller';
import { ServidorService } from './servidor.service';
import { CampusService } from '../campus/campus.service';

@Module({
  controllers: [ServidorController],
  providers: [ServidorService, CampusService],
})
export class ServidorModule {}
