import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  public async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(user)
  }

  public async findAll() {
    return await this.usersRepository.find()
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
}
