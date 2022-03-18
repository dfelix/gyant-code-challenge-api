import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Case } from './entities/case.entity';
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
}
