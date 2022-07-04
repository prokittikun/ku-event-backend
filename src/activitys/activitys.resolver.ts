import { Resolver } from '@nestjs/graphql';
import { ActivitysService } from './activitys.service';

@Resolver()
export class ActivitysResolver {
  constructor(private readonly activitysService: ActivitysService) {}
}
