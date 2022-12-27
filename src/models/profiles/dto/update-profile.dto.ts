import {
  IsString,
  IsUrl,
  IsOptional,
  IsBoolean,
  IsDate,
  IsNumber,
  IsEmail,
} from 'class-validator';
import { User } from 'src/models/users/schema/user.schema';
class UpdateProfileDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsString()
  @IsOptional()
  role: string;

  @IsString()
  @IsOptional()
  companyName: string;

  @IsOptional()
  profileAvatar: string;

  @IsOptional()
  whatsAppNumber: number;

  @IsOptional()
  mobileNumber: number;

  @IsOptional()
  email: string;

  @IsOptional()
  linkedinUrl: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  user: User;
}

export { UpdateProfileDto };
