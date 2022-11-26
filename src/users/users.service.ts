import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { CreateUserParams } from "../utils/types";

@Injectable()
export class UsersService {
  
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }
  
  findUsers(){}
  
  createUser(userDetails: CreateUserParams){
    const newUser = this.userRepository.create({ ...userDetails });
    
    return this.userRepository.save(newUser);
    
  }
  
}
