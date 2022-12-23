import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './schema/profiles.schema';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { AuthUser } from 'src/common/decorators/metadata/user.decorator';
import { ObjectId } from 'mongoose';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get(':id')
  findOneById(
    @Param('id')
    id: string,
  ): Promise<Profile> {
    return this.profilesService.findProfileByUserId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/byEmail/:email')
  findOne(
    @Param('email')
    email: string,
  ): Promise<Profile> {
    return this.profilesService.findProfileByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':profileId')
  update(
    @Param('profileId')
    profileId: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<boolean> {
    return this.profilesService.update(profileId, updateProfileDto);
  }
}
