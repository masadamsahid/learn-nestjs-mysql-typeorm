import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  
  @Column({ unique: true })
  username: string;
  
  @Column()
  password: string;
  
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
  
  @Column({ nullable: true })
  authStrategy: string;
  
}