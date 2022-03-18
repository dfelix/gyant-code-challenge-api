import { Module } from '@nestjs/common';
import { ConditionsService } from './conditions.service';
import { ConditionsController } from './conditions.controller';
import { ConditionsRepository } from './conditions.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionSchema } from './schemas/condition.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Condition', schema: ConditionSchema }]),
  ],
  controllers: [ConditionsController],
  providers: [ConditionsService, ConditionsRepository],
})
export class ConditionsModule {}
