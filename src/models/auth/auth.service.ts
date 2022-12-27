import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../users/user.service';
import Hash from '../../common/helpers/hashs/hash.helpers';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      throw new BadRequestException('Unable to find user with given e-mail');
    }
    const passwordMatches = Hash.compareHash(pass, user.password);
    if (!passwordMatches) {
      throw new BadRequestException('Unable to find user with given e-mail');
    }
    if (user && passwordMatches) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const userExists = await this.usersService.findUserByEmail(user.email);
    if (!userExists) {
      throw new BadRequestException();
    }
    const payload = {
      email: userExists.email,
      code: userExists.code,
      id: userExists._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
