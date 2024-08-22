import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { FieldsOfExpertise, FieldsOfExpertiseEnum } from 'src/fields_of_expertise/entities/fields_of_expertise.entity';
import { FieldsOfExpertiseService } from 'src/fields_of_expertise/fields_of_expertise.service';
import { CreateFieldsOfExpertiseDto } from 'src/fields_of_expertise/dto/create-fields_of_expertise.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly fieldsOfExpertiseService: FieldsOfExpertiseService,
  ) { }

  public async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(user)
  }

  public async findAll() {
    return await this.usersRepository.find({
      relations: {
        projects: true,
        social_links: true,
        fields_of_expertise: true,
        programming_languages: true,
      }
    })
  }

  public async findOne(id: string) {
    return await this.usersRepository.findOneBy({ user_id: id })
  }

  public async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id)
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`)
    }

    Object.assign(user, <User>updateUserDto)

    await this.usersRepository.save(user)
  }

  public async remove(id: string) {
    return await this.usersRepository.delete({ user_id: id });
  }

  public async addFieldOfExpertise(id: string, fieldOfExpertiseID: string) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const foundFieldOfExpertise = await this.fieldsOfExpertiseService.findOne(fieldOfExpertiseID);

    if (!foundFieldOfExpertise) {
      throw new NotFoundException('Field of expertise was not found');
    }

    user.fields_of_expertise.push(foundFieldOfExpertise);
    return await this.usersRepository.save(user);
  }

  public async removeFieldOfExpertise(id: string, fieldCode: string) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const foundFieldOfExpertise = await this.fieldsOfExpertiseService.findOne(fieldCode);

    if (!foundFieldOfExpertise) {
      throw new NotFoundException('Field of expertise was not found');
    }

    user.fields_of_expertise = user.fields_of_expertise.filter(field => field.field_code !== fieldCode);

    return await this.usersRepository.save(user);
  }
}
