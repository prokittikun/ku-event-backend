import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  perPages: number;

  @IsNumber()
  @IsNotEmpty()
  page: number;

  @IsNumber()
  @IsNotEmpty()
  sortFide: string;

  @IsNumber()
  @IsNotEmpty()
  sortType: string;
}
