import { Exclude, Expose } from 'class-transformer';
import { Evaluation } from './evaluation.entity';

@Exclude()
export class Case {
  constructor(partial: Partial<Case>) {
    Object.assign(this, partial);
  }

  @Expose()
  id?: string;

  @Expose()
  description?: string;

  @Expose()
  createdAt?: Date;

  @Expose()
  updatedAt?: Date;

  @Expose()
  evaluation?: Evaluation;
}
