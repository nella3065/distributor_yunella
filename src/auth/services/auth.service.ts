import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(data: any) {
    const username = data.username; // ambil username dari request
    const password = data.password; // ambil password dari request

    if (username === 'admin' && password === '123456') { // validasi sederhana
      return {
        status: true,
        message: 'Login berhasil',
        token: 'dummy-jwt-token-admin', // token dummy
        user: {
          username: 'admin',
          role: 'admin', // role user
        },
      };
    }

    return {
      status: false,
      message: 'Username atau password salah', // login gagal
    };
  }
} 