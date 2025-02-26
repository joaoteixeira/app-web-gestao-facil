import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { ServidorModule } from './modules/servidor/servidor.module';
import { DatabaseModule } from './database/database.module';
import { CampusModule } from './modules/campus/campus.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, ServidorModule, CampusModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
