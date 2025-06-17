import { Body, Controller, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import CheckPasswordDto from '../dto/check-password.dto';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}
  @Post("register")
  create(@Body() body: CheckPasswordDto){
    return body;
  }
}
