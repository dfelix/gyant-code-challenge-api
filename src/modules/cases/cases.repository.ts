import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Condition } from '../conditions/entities/condition.entity';
import { User } from '../users/entities/user.entity';
import { Case } from './entities/case.entity';
import { Evaluation } from './entities/evaluation.entity';
import { CaseDocument } from './schemas/case.schema';

@Injectable()
export class CasesRepository {
  constructor(@InjectModel('Case') private caseModel: Model<CaseDocument>) {}

  async findAll(userFilterQuery?: FilterQuery<Case>): Promise<any> {
    // userFilterQuery = userFilterQuery ? userFilterQuery : {};
    const items = await this.caseModel
      .find(userFilterQuery)
      .lean({ virtuals: true });

    return items.map((u: Partial<Case>) => {
      return new Case(u);
    });
  }

  async findOne(userFilterQuery: FilterQuery<Case>): Promise<Case> {
    const item = await this.caseModel
      .findOne(userFilterQuery)
      .lean({ virtuals: true });
    if (item && Object.keys(item).length > 0) return new Case(item);
    return;
  }

  async findNext(): Promise<Case> {
    const item = await this.caseModel
      .findOne()
      .exists('evaluation', false) // does not contain evaluation yet
      .sort({ createdAt: 1 }) // oldest
      .lean({ virtuals: true });
    if (item && Object.keys(item).length > 0) return new Case(item);
    return;
  }

  async evaluate(
    id: string,
    user: User,
    condition: Condition,
  ): Promise<Evaluation> {
    const data = await this.caseModel.findOne({ _id: id });

    const evaluation: Evaluation = {
      evaluatedBy: user.id,
      condition: condition.code,
      evaluatedAt: new Date(),
    };

    data.set('evaluation', evaluation);

    await data.save();

    return evaluation;
  }
}
