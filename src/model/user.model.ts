import { ObjectId, Document } from "mongodb";

export class User implements Document {
  _id?: ObjectId | string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  _doc: any;

  constructor(data: Partial<User>) {
    this._id = data._id;
    this.name = data.name || "";
    this.email = data.email || "";
    this.password = data.password || "";
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }
}
