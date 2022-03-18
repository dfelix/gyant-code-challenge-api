import { Injectable } from '@nestjs/common';
import { CasesRepository } from './cases.repository';
import { EvaluationDto } from './dto/evaluation.dto';

@Injectable()
export class CasesService {
  constructor(private readonly casesRepository: CasesRepository) {}

  findAll() {
    return this.casesRepository.findAll();
  }

  findNext() {
    return this.casesRepository.findNext();
  }

  findOne(id: string) {
    return this.casesRepository.findOne({ _id: id });
  }

  evaluate(id: string, updateCaseDto: EvaluationDto) {
    return `This action updates a #${id} case`;
  }
}
