import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User,
) {
}

  create(createUserInput: CreateUserInput) {
    
    console.log(createUserInput);
    return createUserInput;
  }

  findAll() {
    return [{id:1, firstName: 'John', lastName: 'Smith'}];
  }

}
