import { Test, TestingModule } from '@nestjs/testing';
import { SocialLinksController } from './social_links.controller';
import { SocialLinksService } from './social_links.service';

describe('SocialLinksController', () => {
  let controller: SocialLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SocialLinksController],
      providers: [SocialLinksService],
    }).compile();

    controller = module.get<SocialLinksController>(SocialLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
