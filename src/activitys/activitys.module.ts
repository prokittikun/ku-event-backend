import { Module } from '@nestjs/common';
import { ActivitysService } from './activitys.service';
import { ActivitysResolver } from './activitys.resolver';

@Module({
  providers: [ActivitysResolver, ActivitysService]
})
export class ActivitysModule {}
