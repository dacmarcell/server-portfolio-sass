import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFieldsOfExpertiseDto } from './dto/create-fields_of_expertise.dto';
import { UpdateFieldsOfExpertiseDto } from './dto/update-fields_of_expertise.dto';
import { FieldsOfExpertise } from './entities/fields_of_expertise.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FieldsOfExpertiseService {
  constructor(
    @InjectRepository(FieldsOfExpertise)
    private readonly fieldsOfExpertiseRepository: Repository<FieldsOfExpertise>
  ) { }

  create(createFieldsOfExpertiseDto: CreateFieldsOfExpertiseDto) {
    const fieldOfExpertise = this.fieldsOfExpertiseRepository.create(createFieldsOfExpertiseDto)
    return this.fieldsOfExpertiseRepository.save(fieldOfExpertise)
  }

  async findAll() {
    return await this.fieldsOfExpertiseRepository.find()
  }

  async findOne(id: string) {
    return await this.fieldsOfExpertiseRepository.findOneBy({ field_code: id })
  }

  async update(id: string, updateFieldsOfExpertiseDto: UpdateFieldsOfExpertiseDto) {
    const fieldOfExpertise = await this.findOne(id)
    if (!fieldOfExpertise) {
      throw new NotFoundException(`Social Link with id ${id} not found`)
    }

    Object.assign(fieldOfExpertise, <FieldsOfExpertise>updateFieldsOfExpertiseDto)

    await this.fieldsOfExpertiseRepository.save(fieldOfExpertise)
  }

  async remove(id: string) {
    return await this.fieldsOfExpertiseRepository.delete({ field_code: id });
  }
}
