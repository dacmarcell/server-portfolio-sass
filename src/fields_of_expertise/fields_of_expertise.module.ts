import { Module } from '@nestjs/common';
import { FieldsOfExpertiseService } from './fields_of_expertise.service';
import { FieldsOfExpertiseController } from './fields_of_expertise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldsOfExpertise } from './entities/fields_of_expertise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FieldsOfExpertise])],
  controllers: [FieldsOfExpertiseController],
  providers: [FieldsOfExpertiseService],
  exports: [FieldsOfExpertiseService]
})
export class FieldsOfExpertiseModule { }
