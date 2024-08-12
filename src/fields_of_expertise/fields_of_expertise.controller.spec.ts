import { Test, TestingModule } from '@nestjs/testing';
import { FieldsOfExpertiseController } from './fields_of_expertise.controller';
import { FieldsOfExpertiseService } from './fields_of_expertise.service';

describe('FieldsOfExpertiseController', () => {
  let controller: FieldsOfExpertiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldsOfExpertiseController],
      providers: [FieldsOfExpertiseService],
    }).compile();

    controller = module.get<FieldsOfExpertiseController>(FieldsOfExpertiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
