import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class ProjectRegistrationDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsBoolean()
    @IsNotEmpty()
    status:boolean;
}