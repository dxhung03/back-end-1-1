import { IsEmail, IsNotEmpty } from "class-validator";
import { IsStrongPassword } from "src/common/decorators/is-strong-password.decorator";

export default class CheckPasswordDto {
  @IsNotEmpty()
  name: string;
  @IsStrongPassword({
    message: "Password must be at least 8 characters including uppercase lowercase and numbers!"
  })
  password: string;
}