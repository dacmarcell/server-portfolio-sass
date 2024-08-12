import { Module } from '@nestjs/common';
import { FieldsOfExpertiseService } from './fields_of_expertise.service';
import { FieldsOfExpertiseController } from './fields_of_expertise.controller';

@Module({
  controllers: [FieldsOfExpertiseController],
  providers: [FieldsOfExpertiseService],
})
export class FieldsOfExpertiseModule {}
