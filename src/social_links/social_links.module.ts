import { Module } from '@nestjs/common';
import { SocialLinksService } from './social_links.service';
import { SocialLinksController } from './social_links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialLink } from './entities/social_link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialLink])],
  controllers: [SocialLinksController],
  providers: [SocialLinksService],
  exports: [SocialLinksService]
})
export class SocialLinksModule { }
