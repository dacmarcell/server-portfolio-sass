import { Injectable } from '@nestjs/common';
import { CreateFieldsOfExpertiseDto } from './dto/create-fields_of_expertise.dto';
import { UpdateFieldsOfExpertiseDto } from './dto/update-fields_of_expertise.dto';

@Injectable()
export class FieldsOfExpertiseService {
  create(createFieldsOfExpertiseDto: CreateFieldsOfExpertiseDto) {
    return 'This action adds a new fieldsOfExpertise';
  }

  findAll() {
    return `This action returns all fieldsOfExpertise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fieldsOfExpertise`;
  }

  update(id: number, updateFieldsOfExpertiseDto: UpdateFieldsOfExpertiseDto) {
    return `This action updates a #${id} fieldsOfExpertise`;
  }

  remove(id: number) {
    return `This action removes a #${id} fieldsOfExpertise`;
  }
}
