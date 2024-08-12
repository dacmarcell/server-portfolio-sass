import { Test, TestingModule } from '@nestjs/testing';
import { FieldsOfExpertiseService } from './fields_of_expertise.service';

describe('FieldsOfExpertiseService', () => {
  let service: FieldsOfExpertiseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldsOfExpertiseService],
    }).compile();

    service = module.get<FieldsOfExpertiseService>(FieldsOfExpertiseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
