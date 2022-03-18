import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User } from './entities/user.entity';
import { UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async findAll(userFilterQuery: FilterQuery<User>): Promise<any> {
    const items = await this.userModel
      .find(userFilterQuery)
      .lean({ virtuals: true });

    return items.map((u: Partial<User>) => {
      return new User(u);
    });
  }

  async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
    const user = await this.userModel
      .findOne(userFilterQuery)
      .lean({ virtuals: true });
    if (user && Object.keys(user).length > 0) return new User(user);
    return;
  }
}
