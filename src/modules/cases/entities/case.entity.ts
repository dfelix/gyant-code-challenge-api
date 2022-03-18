import { Exclude, Expose } from 'class-transformer';

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
}
