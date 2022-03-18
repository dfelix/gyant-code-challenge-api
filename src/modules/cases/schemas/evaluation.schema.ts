import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EvaluationDocument = EvaluationModel & Document;

@Schema()
export class EvaluationModel {
  @Prop({ required: true })
  evaluatedBy: string;
}

export const EvaluationSchema = SchemaFactory.createForClass(EvaluationModel);
