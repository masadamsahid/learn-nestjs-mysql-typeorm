import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dtos/UpdateUser.dto";

@Controller("users")
export class UsersController {
  
  constructor(private userService: UsersService) {
  }
  
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }
  
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  
  @Put(":id")
  async updateUserById(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }
  
  @Delete(":id")
  async deleteUser(
    @Param("id", ParseIntPipe) id: number
  ) {
    await this.userService.deleteUser(id);
  }
  
}
