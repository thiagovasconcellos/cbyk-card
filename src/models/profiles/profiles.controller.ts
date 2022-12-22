import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './schema/profiles.schema';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { AuthUser } from 'src/common/decorators/metadata/user.decorator';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @AuthUser() user: any,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    createProfileDto.userId = user.userId;
    return this.profilesService.create(createProfileDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':email')
  findOne(
    @AuthUser()
    user: any,
    @Param('email')
    email: string,
  ): Promise<Profile> {
    return this.profilesService.findProfileByEmail(email);
  }
}
