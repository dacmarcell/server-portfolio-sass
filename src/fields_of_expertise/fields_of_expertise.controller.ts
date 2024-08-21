import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FieldsOfExpertiseService } from './fields_of_expertise.service';
import { CreateFieldsOfExpertiseDto } from './dto/create-fields_of_expertise.dto';
import { UpdateFieldsOfExpertiseDto } from './dto/update-fields_of_expertise.dto';

@Controller('fields-of-expertise')
export class FieldsOfExpertiseController {
  constructor(private readonly fieldsOfExpertiseService: FieldsOfExpertiseService) { }

  @Post()
  create(@Body() createFieldsOfExpertiseDto: CreateFieldsOfExpertiseDto) {
    return this.fieldsOfExpertiseService.create(createFieldsOfExpertiseDto);
  }

  @Get()
  findAll() {
    return this.fieldsOfExpertiseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldsOfExpertiseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFieldsOfExpertiseDto: UpdateFieldsOfExpertiseDto) {
    return this.fieldsOfExpertiseService.update(id, updateFieldsOfExpertiseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldsOfExpertiseService.remove(id);
  }
}
