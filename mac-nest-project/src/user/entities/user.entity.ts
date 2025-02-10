
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
  
  @Column()
  gender: string;
  
  @Column()
  email: string;
  
  @Column()
  phone: string;
  
  @Column()
  age: number;
  
  @Column()
  dob: string;
  
  @Column()
  password: string;

  @Column()
  picture: string;
  
  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn({type: Date})
  createdAt: Date
}
