import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { Profile, ProfileSchema } from './schema/profiles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
  ],
  providers: [ProfilesService],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
