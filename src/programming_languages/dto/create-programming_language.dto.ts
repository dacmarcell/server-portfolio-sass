import { IsNumber, IsString } from "class-validator"

export class CreateProgrammingLanguageDto {
    @IsString()
    name: string

    @IsNumber()
    level: number
}
