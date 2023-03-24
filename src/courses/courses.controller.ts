import { Controller, Query, Get, Post, Body, Patch, Bind, Param, Delete, UsePipes, ValidationPipe, HttpStatus, HttpException, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { SlugPipe } from './pipes/slug/slug.pipe';

@ApiTags('courses')
@ApiBearerAuth()
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    const { price } = createCourseDto;
    if (isNaN(price) || price === 0) {
      throw new HttpException('No puede ser cero el precio', HttpStatus.BAD_GATEWAY)
    }
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll(@Query('id') id: string) {
    console.log(id);
    return this.coursesService.findAll();
  }

  @Get()
  exampleSettings(){
    return this.coursesService.Hello();
  }

  @Get(':id')
  @Bind(
    Param('id', new ParseIntPipe({
      errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
    }))
  )
  findOne(id:number) {
    console.log(id)
    return this.coursesService.findOne(id);
  }

  @Get('types/:type')
  getType(@Param('type', new SlugPipe()) type:string){
    return this.coursesService.findType(type)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
