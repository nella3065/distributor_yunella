import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule], // import modul autentikasi ke aplikasi utama
})
export class AppModule {}