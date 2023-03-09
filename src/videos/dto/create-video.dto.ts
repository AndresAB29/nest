import { IsNotEmpty, IsUrl, Length } from "class-validator";

export class CreateVideoDto {
    @IsNotEmpty()
    @Length(1,20)
    title: string;

    @IsNotEmpty()
    description: string;
    
    @IsUrl()
    url: string;
}
