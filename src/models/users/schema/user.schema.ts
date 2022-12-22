import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: ObjectId })
  _id: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  code: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
