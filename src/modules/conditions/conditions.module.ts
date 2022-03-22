import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionsController } from './conditions.controller';
import { ConditionsRepository } from './conditions.repository';
import { ConditionsService } from './conditions.service';
import { ConditionSchema } from './schemas/condition.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Condition', schema: ConditionSchema }]),
  ],
  controllers: [ConditionsController],
  providers: [ConditionsService, ConditionsRepository],
  exports: [ConditionsService],
})
export class ConditionsModule {}
