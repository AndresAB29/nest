import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNotEmpty, IsUrl, Length } from "class-validator";

export class CreateCourseDto {
    @ApiProperty()
    
    @IsNotEmpty()
    @Length(1,15)
    title: string;
    
    @ApiProperty()
    
    @IsNotEmpty()
    @Length(20,144)
    description: string;
    
    @ApiProperty()
    
    price: number;
    
    @ApiProperty()
    
    @IsNotEmpty()
    @IsUrl()
    cover:string;
    
    @ApiProperty()
    
    numberVideos: number;
}
