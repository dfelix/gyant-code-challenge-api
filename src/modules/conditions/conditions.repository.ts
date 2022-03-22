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

  async findAll(conditionsFilterQuery: FilterQuery<Condition>): Promise<any[]> {
    const items = await this.conditionModel
      .find(conditionsFilterQuery)
      .lean({ virtuals: true });
    return items.map((u: Partial<Condition>) => {
      return new Condition(u);
    });
  }

  async findOne(userFilterQuery: FilterQuery<Condition>): Promise<Condition> {
    const item = await this.conditionModel
      .findOne(userFilterQuery)
      .lean({ virtuals: true });
    if (item && Object.keys(item).length > 0) return new Condition(item);
    return;
  }
}
