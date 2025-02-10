import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  async create(createUserDto: CreateUserDto) {
    this.usersRepository.save(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return this.usersRepository.find({select: {id:true,  firstname:true, lastname:true, email:true, picture: true, isActive:true, createdAt:true}})
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({id:id})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto)
  }

  remove(id: string) {
    return this.usersRepository.delete(id)
  }
}
