import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { FindUserQuery } from './dto/find-user.query';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @Mutation(() => [CreateUserInput])
  // create(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.usersService.create(createUserInput);
  // }
  @Mutation(() => FindUserQuery, { name: 'createUser'})
  async createUser(@Args('data') input: CreateUserInput){
    return this.usersService.create(input);
  }

  @Mutation(() => FindUserQuery, { name: 'loginUser'})
  async loginUser(@Args('data') input: CreateUserInput){
    return this.usersService.create(input);
  }

  @Query(() => [FindUserQuery])
  findAll() {
    return this.usersService.findAll();
  }

  
}
