import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammingLanguagesController } from './programming_languages.controller';
import { ProgrammingLanguagesService } from './programming_languages.service';

describe('ProgrammingLanguagesController', () => {
  let controller: ProgrammingLanguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammingLanguagesController],
      providers: [ProgrammingLanguagesService],
    }).compile();

    controller = module.get<ProgrammingLanguagesController>(ProgrammingLanguagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
