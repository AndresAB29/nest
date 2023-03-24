import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Courses>;

@Schema()
export class Courses {
  @Prop({required: true})
  title: string;
  
  // @Prop()
  // idAuthor: mongoose.Types.ObjectId;

  @Prop()
  description: string;

  @Prop()
  price: number;
  
  @Prop()
  cover: string;
}

export const CourseSchema = SchemaFactory.createForClass(Courses);