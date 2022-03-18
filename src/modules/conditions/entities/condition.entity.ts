import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class Condition {
  constructor(partial: Partial<Condition>) {
    Object.assign(this, partial);
  }

  @Expose()
  code: string;

  @Expose()
  name: string;
}
