import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class FindUserQuery {
  @Field(() => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}