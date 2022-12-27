import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';
import Hash from '../../common/helpers/hashs/hash.helpers';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) { }

  async create(user: CreateUserDto): Promise<User> {
    const userExists = await this.userModel.findOne({
      where: {
        email: user.email,
      },
    });
    if (userExists && userExists.email === user.email) {
      throw new BadRequestException('User e-mail already exists');
    }
    user.code = Math.floor(Math.random() * 900000) + 100000;
    const hashedPassword = await Hash.generateHash(user.password);
    user.password = hashedPassword;
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.userModel
      .findOne({
        email: email,
      })
      .exec();

    if (!user || user.email !== email) {
      throw new BadRequestException('Invalid credentials');
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }
}
