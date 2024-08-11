import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator"

export class CreateUserDto {
    @Length(2, 30)
    @IsString()
    first_name: string

    @Length(2, 30)
    @IsString()
    last_name: string

    @Length(5, 50)
    @IsEmail()
    @IsString()
    email: string

    @IsStrongPassword()
    @IsString()
    password: string

    @Length(200, 600)
    @IsString()
    about: string
}
