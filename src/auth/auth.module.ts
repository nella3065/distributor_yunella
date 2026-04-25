import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [AuthController], // controller untuk endpoint auth
  providers: [AuthService], // service logic auth (login, validasi)
})
export class AuthModule {}