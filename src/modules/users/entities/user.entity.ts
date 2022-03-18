import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @Expose()
  id?: string;

  @Expose()
  email?: string;

  password?: string;

  @Expose()
  createdAt?: Date;

  @Expose()
  updatedAt?: Date;
}
