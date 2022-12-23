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

  @IsUrl()
  @IsOptional()
  profileAvatar: string;

  @IsNumber()
  @IsOptional()
  whatsAppNumber: number;

  @IsNumber()
  @IsOptional()
  mobileNumber: number;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsUrl()
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
