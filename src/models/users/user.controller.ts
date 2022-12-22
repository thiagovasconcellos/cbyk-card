import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  // @Roles('admin')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(@Req() request: Request): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':email')
  findOne(
    @Param('email')
    email: string,
  ): Promise<User> {
    return this.userService.findUserByEmail(email);
  }
}
