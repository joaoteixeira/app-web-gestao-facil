import { Module } from '@nestjs/common';
import { CampusService } from './campus.service';
import { CampusController } from './campus.controller';

@Module({
  controllers: [CampusController],
  providers: [CampusService],
  exports: [CampusService]
})
export class CampusModule { }
