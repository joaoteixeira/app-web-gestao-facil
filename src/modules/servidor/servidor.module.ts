import { Module } from '@nestjs/common';
import { ServidorController } from './servidor.controller';
import { ServidorService } from './servidor.service';

@Module({
  controllers: [ServidorController],
  providers: [ServidorService]
})
export class ServidorModule {}
