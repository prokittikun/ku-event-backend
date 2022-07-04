import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class FindUserQuery {
  
  @Field()
  userId: string;
  
  @Field()
  lastName: string;
  
  @Field(() => Int)
  amountParticipant: number;
}