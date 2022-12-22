import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../common/guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    req.user = {
      email: req.body.email,
      password: req.body.password,
    };
    return this.authService.login(req.user);
  }
}
