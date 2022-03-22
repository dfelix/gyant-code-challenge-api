import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionsModule } from '../conditions/conditions.module';
import { UsersModule } from '../users/users.module';
import { CasesController } from './cases.controller';
import { CasesRepository } from './cases.repository';
import { CasesService } from './cases.service';
import { CaseSchema } from './schemas/case.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Case', schema: CaseSchema }]),
    ConditionsModule,
    UsersModule,
  ],
  controllers: [CasesController],
  providers: [CasesService, CasesRepository],
})
export class CasesModule {}
