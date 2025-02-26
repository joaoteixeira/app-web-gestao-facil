import { Module } from '@nestjs/common';
import { CampusService } from './campus.service';

@Module({
  controllers: [],
  providers: [CampusService],
  exports: [CampusService]
})
export class CampusModule { }
