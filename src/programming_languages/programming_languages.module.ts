import { Module } from '@nestjs/common';
import { ProgrammingLanguagesService } from './programming_languages.service';
import { ProgrammingLanguagesController } from './programming_languages.controller';

@Module({
  controllers: [ProgrammingLanguagesController],
  providers: [ProgrammingLanguagesService],
})
export class ProgrammingLanguagesModule {}
