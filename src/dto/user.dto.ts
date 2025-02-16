import { ObjectId } from "mongodb";

export interface UserDetailsDto {
  id: ObjectId | undefined;
  name: string;
  image?: string;
  email: string;
}

export interface UserSummaryDto {
  id: ObjectId | undefined;
  name: string;
  image?: string;
}

export interface UserUpdateDto {
  name?: string;
  image?: string;
  email?: string;
}
