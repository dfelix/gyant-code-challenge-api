import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CaseSchema } from './schemas/case.schema';
import { CasesRepository } from './cases.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Case', schema: CaseSchema }])],
  controllers: [CasesController],
  providers: [CasesService, CasesRepository],
})
export class CasesModule {}
