import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/models/users/schema/user.schema';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  role: string;

  @Prop()
  companyName: string;

  @Prop()
  profileAvatar: string;

  @Prop()
  whatsAppNumber: number;

  @Prop()
  mobileNumber: number;

  @Prop()
  email: string;

  @Prop()
  linkedinUrl: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  user: User;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
