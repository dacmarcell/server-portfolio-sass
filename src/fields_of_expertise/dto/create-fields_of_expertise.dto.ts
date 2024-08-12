import { IsEnum } from "class-validator";
import { FieldsOfExpertiseEnum } from "../entities/fields_of_expertise.entity";

export class CreateFieldsOfExpertiseDto {
    @IsEnum(FieldsOfExpertiseEnum)
    name: FieldsOfExpertiseEnum
}
