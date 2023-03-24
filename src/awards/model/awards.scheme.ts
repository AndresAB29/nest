import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type awardsDocument = HydratedDocument<Awards>;

@Schema({timestamps:true})
export class Awards {
  @Prop({required: true, unique: true})
  email: string;

  @Prop()
  password: string;

  @Prop()
  avatar: string;

  @Prop()
  idUser: mongoose.Types.ObjectId;
  
  @Prop()
  desciption: string;
}

export const CatSchema = SchemaFactory.createForClass(Awards);