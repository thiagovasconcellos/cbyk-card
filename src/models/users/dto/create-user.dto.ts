import {
  IsString,
  IsOptional,
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
} from 'class-validator';
class CreateUserDto {
  @IsOptional()
  _id: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  @IsOptional()
  code: number;

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

export { CreateUserDto };
