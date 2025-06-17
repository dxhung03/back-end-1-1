import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from '../dto/create-user.dto';
import UserParamDto from '../dto/user-param.dto';
import SearchQueryDto from '../dto/search-query.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get("search")
  search(@Query() query: SearchQueryDto){
    return query;
  }
  @Get(":id")
  findOne(@Param() params: UserParamDto) {
    console.log(params.id);
    return params.id;
  }
  @Post()
  create(@Body() body: CreateUserDto) {
    return body;
  }
  
}
