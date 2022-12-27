import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile, ProfileDocument } from './schema/profiles.schema';
import { User, UserDocument } from '../users/schema/user.schema';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ObjectID } from 'bson';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<ProfileDocument>,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) { }

  async create(profile: CreateProfileDto): Promise<Profile> {
    const profileExists = await this.profileModel
      .findOne({
        email: profile.email,
      })
      .exec();
    if (profileExists && profileExists.email === profile.email) {
      throw new BadRequestException('Profile with given email already exists');
    }

    const createUser = {
      email: profile.email,
      password: profile.password,
    };

    const newUser = new this.userModel(createUser);
    await newUser.save();

    profile.user = newUser;

    const newProfile = new this.profileModel(profile);
    return newProfile.save();
  }

  async findProfileByEmail(email: string): Promise<Profile | undefined> {
    const profile = await this.profileModel
      .findOne({
        email: email,
      })
      .exec();
    return profile;
  }

  async findProfileByUserId(profileId: string): Promise<Profile | undefined> {
    const objectId = new ObjectID(profileId);
    const profile = await this.profileModel.findOne(objectId);
    return profile;
  }

  async update(profileId: string, profile: UpdateProfileDto): Promise<boolean> {
    const updateProfile = await this.profileModel.findByIdAndUpdate(
      profileId,
      profile,
    );
    if (!updateProfile) {
      throw new NotFoundException();
    }
    return true;
  }
}
