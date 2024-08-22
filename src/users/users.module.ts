import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FieldsOfExpertiseModule } from 'src/fields_of_expertise/fields_of_expertise.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ProgrammingLanguagesModule } from 'src/programming_languages/programming_languages.module';

@Module({
  imports: [
    FieldsOfExpertiseModule,
    ProgrammingLanguagesModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
