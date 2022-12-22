import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';

import { jwtConstants } from '../../common/constants/constants';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { LocalStrategy } from '../../authentication/local.strategy';
import { JwtStrategy } from '../../authentication/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
