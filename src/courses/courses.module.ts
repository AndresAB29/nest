import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Courses, CourseSchema } from './model/courses.scheme';
import { Users, UserSchema } from 'src/users/model/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name:Courses.name, schema:CourseSchema},
        {name:Users.name, schema:UserSchema}
      ]
    )
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService]
})
export class CoursesModule {}
