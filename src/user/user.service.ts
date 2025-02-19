import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async findAll(args: Record<string, string> & { page?: number }) {
    let queryBuilder = this.usersRepository.createQueryBuilder('user');

    // Apply ordering
    args.sortBy === 'asc' ?
      queryBuilder.orderBy('user.createdAt', 'ASC') : queryBuilder.orderBy('user.createdAt', 'DESC');

    // Apply pagination
    (args.page && args.page > 0) ?
      queryBuilder.take(10).skip((args.page - 1) * 10) : null;

    // Select the columns you need
    queryBuilder.select(['user.id', 'user.firstname', 'user.lastname', 'user.isActive', 'user.createdAt']);
    return await queryBuilder.getMany();

  }


  async findOne(id: string) {
    return await this.usersRepository.findOneBy({ id: id })
  }

  findByStatus(status: string) {
    let queryBuilder = this.usersRepository.createQueryBuilder('user');
    return status === 'active' ?
      queryBuilder.where('user.isActive = :isActive', { isActive: true }).getCount() :
      status === 'inactive' ?
        queryBuilder.where('user.isActive = :isActive', { isActive: false }).getCount() :
        queryBuilder.getCount();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(id, updateUserDto)
    return 'Status updated successfully';
  }

  async remove(id: string) {
    await this.usersRepository.delete(id)
    return 'User deleted'
  }
}
