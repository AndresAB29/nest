import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/users/model/user.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseDocument, Courses } from './model/courses.scheme';

@Injectable()
export class CoursesService {

  constructor(
    @InjectModel(Courses.name) private readonly coursesModel: Model<CourseDocument>,
    @InjectModel(Users.name) private readonly UserModel: Model<UserDocument>
  ) { }

  create(createCourseDto: CreateCourseDto) {
    const user = this.UserModel.find()
    console.log(user)
    return this.coursesModel.create(createCourseDto);
  }

  findAll() {
    return `This action returns all courses`;
  }

  Hello(){
    return 'Hello a'
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  findType(type: string) {
    return `This action returns a #${type} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
