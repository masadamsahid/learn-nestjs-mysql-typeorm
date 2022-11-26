import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  
  constructor(private userService: UsersService) {
  }
  
  @Get()
  getUsers(){}
  
  @Post()
  createUser(@Body() createUserDto: CreateUserDto){
    this.userService.createUser(createUserDto);
  }
  
}
