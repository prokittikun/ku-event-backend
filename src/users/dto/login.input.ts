import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {

  @Field({ nullable: false })
  userName: string;

  @Field({ nullable: false })
  passWord: string;
}