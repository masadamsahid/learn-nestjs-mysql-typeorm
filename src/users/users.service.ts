import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { CreateUserPostParams, CreateUserParams, CreateUserProfileParams, UpdateUserParams } from "../utils/types";
import { Profile } from "../typeorm/entities/Profile";
import { Post } from "../typeorm/entities/Post";

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {
  }
  
  findUsers() {
    return this.userRepository.find({relations: ['profile', 'posts']});
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
  
  async createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParams) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new HttpException(
      "User not found. Cannot create profile",
      HttpStatus.BAD_REQUEST
    );
    
    const newProfile = this.profileRepository.create(createUserProfileDetails);
    
    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile;
    
    return this.userRepository.save(user);
  }
  
  async createPost(id: number, createUserPostDetails: CreateUserPostParams){
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new HttpException(
      "User not found. Cannot create profile",
      HttpStatus.BAD_REQUEST
    );
    
    const newPost = this.postRepository.create({
      ...createUserPostDetails,
      user,
    });
    
    return await this.postRepository.save(newPost);
  }
  
}
