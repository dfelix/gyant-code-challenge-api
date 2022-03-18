import { Injectable, NotFoundException } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findOne(userFilterQuery: FilterQuery<User>) {
    const user: User = await this.usersRepository.findOne(userFilterQuery);
    if (!user) throw new NotFoundException('user-not-found');
    return user;
  }
}
