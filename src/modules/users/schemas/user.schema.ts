import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import * as leanVirtuals from 'mongoose-lean-virtuals';

export type UserDocument = UserModel & Document;

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
})
export class UserModel {
  @Prop({ required: true, unique: true, index: true })
  email?: string;

  @Prop({ required: true })
  password?: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

UserSchema.virtual('id').get(function () {
  return this._id;
});

// UserSchema.plugin(leanVirtuals);
