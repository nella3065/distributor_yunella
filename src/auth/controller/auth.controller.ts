import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {} // inject service

  @Post('login')
  login(@Body() body: any) {
    return this.authService.login(body); // kirim data ke service login
  }

  @Get()
  checkAuth() {
    return 'Auth route aktif'; // endpoint untuk cek route auth
  }
}