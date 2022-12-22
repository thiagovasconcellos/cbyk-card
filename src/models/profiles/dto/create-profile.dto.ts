import {
  IsString,
  IsUrl,
  IsOptional,
  IsBoolean,
  IsDate,
  IsNumber,
  IsEmail,
  IsMongoId,
} from 'class-validator';
class CreateProfileDto {
  @IsOptional()
  userId: any;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  role: string;

  @IsString()
  @IsOptional()
  companyName: string;

  @IsUrl()
  @IsOptional()
  profileAvatar: string;

  @IsUrl()
  @IsOptional()
  companyAvatar: string;

  @IsNumber()
  whatsAppNumber: number;

  @IsNumber()
  mobileNumber: number;

  @IsEmail()
  email: string;

  @IsUrl()
  linkedinUrl: string;

  @IsUrl()
  websiteUrl: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}

export { CreateProfileDto };
