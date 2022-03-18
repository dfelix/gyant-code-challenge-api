import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Condition } from './entities/condition.entity';
import { ConditionDocument } from './schemas/condition.schema';

@Injectable()
export class ConditionsRepository {
  constructor(
    @InjectModel('Condition') private conditionModel: Model<ConditionDocument>,
  ) {}

  async findAll(userFilterQuery: FilterQuery<Condition>): Promise<any[]> {
    const items = await this.conditionModel
      .find(userFilterQuery)
      .lean({ virtuals: true });
    return items.map((u: Partial<Condition>) => {
      return new Condition(u);
    });
  }
}
