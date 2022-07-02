import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    console.log(createUserInput);
    return createUserInput;
  }

  findAll() {
    return [{id:1, firstName: 'John', lastName: 'Smith'}];
  }

}
