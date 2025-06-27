import { IsMobilePhone, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    fname: string

    @IsString()
    lname: string

    @IsMobilePhone()
    contact: string

    @IsString()
    password: string
}
