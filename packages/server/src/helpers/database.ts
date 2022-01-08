/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import mongoose, { Schema, SchemaDefinition, SchemaOptions } from 'mongoose';
import config from 'config';

export default class Database {
  static createSchema(schema: SchemaDefinition, options: SchemaOptions = {}) {
    return new Schema(schema, {
      toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (_: any, ret: any) => {
          delete ret._id;
          ret.password && delete ret.password;
          ret.tokenRevision && delete ret.tokenRevision;
        },
      },
      ...options,
    });
  }

  static async connect() {
    const { user, password, name } = config.db;

    const uri = `mongodb+srv://${user}:${encodeURIComponent(
      password
    )}@cluster0.7hiwp.mongodb.net/${name}?retryWrites=true&w=majority`;

    await mongoose.connect(uri);

    // eslint-disable-next-line no-console
    console.log('Database connected successfully');
  }
}
