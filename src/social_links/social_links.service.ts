import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSocialLinkDto } from './dto/create-social_link.dto';
import { UpdateSocialLinkDto } from './dto/update-social_link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SocialLink } from './entities/social_link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SocialLinksService {
  constructor(
    @InjectRepository(SocialLink)
    private readonly socialLinksRepository: Repository<SocialLink>
  ) { }

  create(createSocialLinkDto: CreateSocialLinkDto) {
    const socialLink = this.socialLinksRepository.create(createSocialLinkDto)
    return this.socialLinksRepository.save(socialLink)
  }

  async findAll() {
    return await this.socialLinksRepository.find()
  }

  async findOne(id: number) {
    return await this.socialLinksRepository.findOneBy({ social_link_id: id })
  }

  async update(id: number, updateSocialLinkDto: UpdateSocialLinkDto) {
    const socialLink = await this.findOne(id)
    if (!socialLink) {
      throw new NotFoundException(`Social Link with id ${id} not found`)
    }

    Object.assign(socialLink, <SocialLink>updateSocialLinkDto)

    await this.socialLinksRepository.save(socialLink)
  }

  async remove(id: number) {
    return await this.socialLinksRepository.delete({ social_link_id: id });
  }
}
