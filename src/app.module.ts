import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { ServidorModule } from './modules/servidor/servidor.module';

@Module({
  imports: [AuthModule, UsersModule, ServidorModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

