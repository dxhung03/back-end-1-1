import { IsByteLength, IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";

export default class CreateUserDto {
  @IsNotEmpty({
    message: "Username is not empty!"
  })
  @MinLength(4, {
    message: "Username must be at least 4 characters long!"
  })
  username: string;
  @IsNotEmpty({
    message: 'Email is not empty',
  })
  @IsEmail({}, {
    message: 'Invalid email format',
  })
  email: string;
  @Min(18,{
    message: "Age must be at least 18"
  })
  age: number;
}