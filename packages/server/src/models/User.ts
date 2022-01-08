import { Document, model } from 'mongoose';
import { User as UserBase } from '@fb/common';
import Database from '../helpers/database';

export interface User extends UserBase, Document {
  id: string;
  password: string;
  tokenRevision: number;
}

const UserSchema = Database.createSchema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokenRevision: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model<User>('user', UserSchema);

export default UserModel;
