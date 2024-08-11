import { Module } from '@nestjs/common';
import { SocialLinksService } from './social_links.service';
import { SocialLinksController } from './social_links.controller';

@Module({
  controllers: [SocialLinksController],
  providers: [SocialLinksService],
})
export class SocialLinksModule {}
