import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop({ type: ObjectId })
  userId: string;

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
  websiteUrl: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
