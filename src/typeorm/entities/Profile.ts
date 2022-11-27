import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user_profiles" })
export class Profile {
  
  @PrimaryGeneratedColumn()
  id: string;
  
  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @Column()
  age: number;
  
  @Column()
  dob: string;
  
  
}