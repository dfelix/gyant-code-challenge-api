import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ConditionDocument = ConditionModel & Document;

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
})
export class ConditionModel {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  name: string;
}

export const ConditionSchema = SchemaFactory.createForClass(ConditionModel);
