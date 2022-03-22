import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EvaluationDocument = EvaluationModel & Document;

@Schema({ _id: false })
export class EvaluationModel {
  @Prop({ required: true })
  evaluatedBy: string;

  @Prop({ required: true })
  condition: string;

  @Prop({ required: true })
  evaluatedAt?: Date;
}

export const EvaluationSchema = SchemaFactory.createForClass(EvaluationModel);
