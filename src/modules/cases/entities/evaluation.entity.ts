import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class Evaluation {
  constructor(partial: Partial<Evaluation>) {
    Object.assign(this, partial);
  }

  @Expose()
  condition?: string;

  @Expose()
  evaluatedBy?: string;

  @Expose()
  evaluatedAt?: Date;
}
