import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose,{ HydratedDocument } from 'mongoose';

export type VideoDocument = HydratedDocument<Video>;

@Schema({timestamps:true})
export class Video {
  @Prop({required: true, unique: true})
  title: string;

  @Prop()
  idCourses: mongoose.Types.ObjectId;

  @Prop()
  source: string;

  @Prop()
  score: string;
  
  @Prop()
  desciption: string;
}

export const CatSchema = SchemaFactory.createForClass(Video);