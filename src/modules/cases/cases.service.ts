import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConditionsService } from '../conditions/conditions.service';
import { UsersService } from '../users/users.service';
import { CasesRepository } from './cases.repository';
import { EvaluationDto } from './dto/evaluation.dto';

@Injectable()
export class CasesService {
  constructor(
    private readonly casesRepository: CasesRepository,
    private readonly conditionsService: ConditionsService,
    private readonly usersService: UsersService,
  ) {}

  findAll() {
    return this.casesRepository.findAll();
  }

  findNext() {
    return this.casesRepository.findNext();
  }

  findOne(id: string) {
    return this.casesRepository.findOne({ _id: id });
  }

  async evaluate(id: string, evaluation: EvaluationDto) {
    const item = await this.casesRepository.findOne({ _id: id });
    if (!item) throw new NotFoundException('case-not-found');
    if (item.evaluation) throw new ConflictException('case-already-evaluated');

    const condition = await this.conditionsService.findOne(evaluation.code);
    if (!condition) throw new NotFoundException('condition-not-found');

    const user = await this.usersService.findOne({
      _id: evaluation.evaluatedBy,
    });
    if (!user) throw new NotFoundException('user-not-found');

    return this.casesRepository.evaluate(id, user, condition);
  }
}
