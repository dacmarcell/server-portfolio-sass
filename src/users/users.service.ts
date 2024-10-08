import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { FieldsOfExpertiseService } from 'src/fields_of_expertise/fields_of_expertise.service';
import { ProgrammingLanguagesService } from 'src/programming_languages/programming_languages.service';
import { ProjectsService } from 'src/projects/projects.service';
import { SocialLinksService } from 'src/social_links/social_links.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly fieldsOfExpertiseService: FieldsOfExpertiseService,
    private readonly programmingLanguageService: ProgrammingLanguagesService,
    private readonly projectsService: ProjectsService,
    private readonly socialLinksService: SocialLinksService
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

  public async addProgrammingLanguage(id: string, programmingLanguageID: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const foundProgrammingLanguage = await this.programmingLanguageService.findOne(programmingLanguageID);
    if (!foundProgrammingLanguage) {
      throw new NotFoundException('Programming language was not found');
    }

    user.programming_languages.push(foundProgrammingLanguage);
    return await this.usersRepository.save(user);
  }

  public async removeProgrammingLanguage(id: string, programmingLanguageID: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const foundProgrammingLanguage = await this.programmingLanguageService.findOne(programmingLanguageID);
    if (!foundProgrammingLanguage) {
      throw new NotFoundException('Programming language was not found');
    }

    user.programming_languages = user.programming_languages.filter(language => language.programming_language_id !== programmingLanguageID);

    return await this.usersRepository.save(user);
  }

  public async addProject(id: string, projectID: string) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const project = await this.projectsService.findOne(projectID);
    if (!project) {
      throw new NotFoundException('Project was not found');
    }

    user.projects.push(project);
    return await this.usersRepository.save(user);
  }

  public async removeProject(id: string, projectID: string) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const project = await this.projectsService.findOne(projectID);
    if (!project) {
      throw new NotFoundException('Project was not found');
    }

    user.projects = user.projects.filter(project => project.project_id !== projectID);

    return await this.usersRepository.save(user);
  }

  public async addSocialLink(id: string, socialLinkID: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const socialLink = await this.socialLinksService.findOne(socialLinkID);
    if (!socialLink) {
      throw new NotFoundException('Social link was not found');
    }

    user.social_links.push(socialLink);
    return await this.usersRepository.save(user);
  }

  public async removeSocialLink(id: string, socialLinkID: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException('User was not found');

    const socialLink = await this.socialLinksService.findOne(socialLinkID);
    if (!socialLink) {
      throw new NotFoundException('Social link was not found');
    }

    user.social_links = user.social_links.filter(link => link.social_link_id !== socialLinkID);

    return await this.usersRepository.save(user);
  }
}
