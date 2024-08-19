import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgrammingLanguageDto } from './dto/create-programming_language.dto';
import { UpdateProgrammingLanguageDto } from './dto/update-programming_language.dto';
import { ProgrammingLanguage } from './entities/programming_language.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammingLanguagesService {
  constructor(
    @InjectRepository(ProgrammingLanguage)
    private readonly programmingLanguageRepository: Repository<ProgrammingLanguage>
  ) { }

  create(createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
    const programmingLanguage = this.programmingLanguageRepository.create(createProgrammingLanguageDto)
    return this.programmingLanguageRepository.save(programmingLanguage)
  }

  async findAll() {
    return await this.programmingLanguageRepository.find()
  }

  async findOne(id: number) {
    return await this.programmingLanguageRepository.findOneBy({ programming_language_id: id })
  }

  async update(id: number, updateProgrammingLanguageDto: UpdateProgrammingLanguageDto) {
    const programmingLanguage = await this.findOne(id)
    if (!programmingLanguage) {
      throw new NotFoundException(`Social Link with id ${id} not found`)
    }

    Object.assign(programmingLanguage, <ProgrammingLanguage>updateProgrammingLanguageDto)

    await this.programmingLanguageRepository.save(programmingLanguage)
  }

  async remove(id: number) {
    return await this.programmingLanguageRepository.delete({ programming_language_id: id });
  }
}
