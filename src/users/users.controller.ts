import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateFieldsOfExpertiseDto } from 'src/fields_of_expertise/dto/create-fields_of_expertise.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post(':id/add-field-of-expertise')
  addFieldOfExpertise(@Param('id') id: string, @Query('fieldCode') fieldCode: string) {
    return this.usersService.addFieldOfExpertise(id, fieldCode);
  }

  @Post(':id/remove-field-of-expertise')
  removeFieldOfExpertise(@Param('id') id: string, @Query('fieldCode') fieldCode: string) {
    return this.usersService.removeFieldOfExpertise(id, fieldCode);
  }

  @Post(':id/add-programming-language')
  addProgrammingLanguage(@Param('id') id: string, @Query('languageCode') languageCode: number) {
    return this.usersService.addProgrammingLanguage(id, +languageCode);
  }

  @Post(':id/remove-programming-language')
  removeProgrammingLanguage(@Param('id') id: string, @Query('languageCode') languageCode: number) {
    return this.usersService.removeProgrammingLanguage(id, +languageCode);
  }

  @Post(':id/add-project')
  addProject(@Param('id') id: string, @Query('projectID') projectID: string) {
    return this.usersService.addProject(id, projectID);
  }

  @Post(':id/remove-project')
  removeProject(@Param('id') id: string, @Query('projectID') projectID: string) {
    return this.usersService.removeProject(id, projectID);
  }

  @Post(':id/add-social-link')
  addSocialLink(@Param('id') id: string, @Query('linkID') linkID: number) {
    return this.usersService.addSocialLink(id, +linkID);
  }

  @Post(':id/remove-social-link')
  removeSocialLink(@Param('id') id: string, @Query('linkID') linkID: number) {
    return this.usersService.removeSocialLink(id, +linkID);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
