import { IsNotEmpty, Length } from "class-validator";

export class CreateCourseDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @Length(1,15)
    title: string;
    
    @IsNotEmpty()
    @Length(20,144)
    description: string;
    
    numberVideos: number;
}
