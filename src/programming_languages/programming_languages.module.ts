import { Module } from '@nestjs/common';
import { ProgrammingLanguagesService } from './programming_languages.service';
import { ProgrammingLanguagesController } from './programming_languages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgrammingLanguage } from './entities/programming_language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProgrammingLanguage])],
  controllers: [ProgrammingLanguagesController],
  providers: [ProgrammingLanguagesService],
})
export class ProgrammingLanguagesModule { }
