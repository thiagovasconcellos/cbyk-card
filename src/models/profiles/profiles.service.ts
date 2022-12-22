import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile, ProfileDocument } from './schema/profiles.schema';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<ProfileDocument>,
  ) {}

  async create(profile: CreateProfileDto): Promise<Profile> {
    const profileExists = await this.profileModel.findOne({
      where: {
        email: profile.email,
      },
    });
    if (profileExists && profileExists.email === profile.email) {
      throw new BadRequestException('Profile with given email already exists');
    }

    const newProfile = new this.profileModel(profile);
    return newProfile.save();
  }

  async findProfileByEmail(email: string): Promise<Profile | undefined> {
    const profile = await this.profileModel.findOne({
      where: {
        email,
      },
    });
    return profile;
  }
}
