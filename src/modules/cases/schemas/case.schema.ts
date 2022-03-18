import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EvaluationDocument, EvaluationSchema } from './evaluation.schema';
import * as leanVirtuals from 'mongoose-lean-virtuals';

export type CaseDocument = CaseModel & Document;

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
})
export class CaseModel {
  @Prop({ required: true })
  description: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;

  @Prop({ type: EvaluationSchema })
  evaluation?: EvaluationDocument;
}

export const CaseSchema = SchemaFactory.createForClass(CaseModel);

CaseSchema.virtual('id').get(function () {
  return this._id;
});

CaseSchema.plugin(leanVirtuals);
