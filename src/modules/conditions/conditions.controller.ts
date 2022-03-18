import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ConditionsService } from './conditions.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Get()
  findAll() {
    return this.conditionsService.findAll();
  }
}
