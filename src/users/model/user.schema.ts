import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Users>;

@Schema({timestamps:true})
export class Users {
  @Prop({required: true, unique: true})
  email: string;

  @Prop()
  password: string;

  @Prop()
  avatar: string;
  
  @Prop()
  desciption: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);