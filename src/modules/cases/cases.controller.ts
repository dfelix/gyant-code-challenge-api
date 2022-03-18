import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Post,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CasesService } from './cases.service';
import { EvaluationDto } from './dto/evaluation.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Get()
  findAll() {
    return this.casesService.findAll();
  }

  @Get('next')
  findNext() {
    return this.casesService.findNext();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casesService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCaseDto: UpdateCaseDto) {
  //   return this.casesService.update(+id, updateCaseDto);
  // }

  @Post(':id/evaluate')
  evaluate(@Param('id') id: string, @Body() updateCaseDto: EvaluationDto) {
    return this.casesService.evaluate(id, updateCaseDto);
  }
}
