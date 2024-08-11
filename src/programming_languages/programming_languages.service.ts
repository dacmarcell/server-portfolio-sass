import { Injectable } from '@nestjs/common';
import { CreateProgrammingLanguageDto } from './dto/create-programming_language.dto';
import { UpdateProgrammingLanguageDto } from './dto/update-programming_language.dto';

@Injectable()
export class ProgrammingLanguagesService {
  create(createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
    return 'This action adds a new programmingLanguage';
  }

  findAll() {
    return `This action returns all programmingLanguages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} programmingLanguage`;
  }

  update(id: number, updateProgrammingLanguageDto: UpdateProgrammingLanguageDto) {
    return `This action updates a #${id} programmingLanguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} programmingLanguage`;
  }
}
