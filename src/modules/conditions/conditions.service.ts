import { Injectable } from '@nestjs/common';
import { ConditionsRepository } from './conditions.repository';

@Injectable()
export class ConditionsService {
  constructor(private readonly conditionsRepository: ConditionsRepository) {}

  findAll() {
    return this.conditionsRepository.findAll({});
  }

  findOne(code: string) {
    return this.conditionsRepository.findOne({ code });
  }
}
