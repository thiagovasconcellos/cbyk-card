import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './models/users/user.module';
import { ProfilesModule } from './models/profiles/profiles.module';
import { AuthModule } from './models/auth/auth.module';
import { AuthController } from './models/auth/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    UserModule,
    ProfilesModule,
    AuthModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}
