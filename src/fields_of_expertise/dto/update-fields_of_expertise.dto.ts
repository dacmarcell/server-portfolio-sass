import { PartialType } from '@nestjs/mapped-types';
import { CreateFieldsOfExpertiseDto } from './create-fields_of_expertise.dto';

export class UpdateFieldsOfExpertiseDto extends PartialType(CreateFieldsOfExpertiseDto) {}
