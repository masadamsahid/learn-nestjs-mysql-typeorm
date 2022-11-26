import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { CreateUserParams, UpdateUserParams } from "../utils/types";

@Injectable()
export class UsersService {
  
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }
  
  findUsers() {
    return this.userRepository.find();
  }
  
  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({ ...userDetails });
    
    return this.userRepository.save(newUser);
    
  }
  
  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }
  
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
  
}
