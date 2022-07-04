import { ApolloDriver } from '@nestjs/apollo';
import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import { ActivitysModule } from './activitys/activitys.module';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SharedModule } from './shared/shared.module';
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    UsersModule,
    ActivitysModule,
    SharedModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
