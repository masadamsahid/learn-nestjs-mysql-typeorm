import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  
  constructor(private userService: UsersService) {
  }
  
  @Get()
  getUsers(){
    return this.userService.findUsers();
  }
  
  @Post()
  createUser(@Body() createUserDto: CreateUserDto){
    return this.userService.createUser(createUserDto);
  }
  
}
