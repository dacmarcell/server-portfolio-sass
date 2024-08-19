import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ) { }

  create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto)
    return this.projectRepository.save(project)
  }

  async findAll() {
    return await this.projectRepository.find()
  }

  async findOne(id: string) {
    return await this.projectRepository.findOneBy({ project_id: id })
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id)
    if (!project) {
      throw new NotFoundException(`Social Link with id ${id} not found`)
    }

    Object.assign(project, <Project>updateProjectDto)

    await this.projectRepository.save(project)
  }

  async remove(id: string) {
    return await this.projectRepository.delete({ project_id: id });
  }
}
