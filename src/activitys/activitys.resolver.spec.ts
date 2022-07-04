import { Test, TestingModule } from '@nestjs/testing';
import { ActivitysResolver } from './activitys.resolver';
import { ActivitysService } from './activitys.service';

describe('ActivitysResolver', () => {
  let resolver: ActivitysResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitysResolver, ActivitysService],
    }).compile();

    resolver = module.get<ActivitysResolver>(ActivitysResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
