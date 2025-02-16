import { Secret, SignOptions } from "jsonwebtoken";

interface ServerConfigDto {
  environment: string;
  port: number;
}

interface DatabaseConfigDto {
  url: string;
  name: string;
  user: string;
  password: string;
}

interface JwtConfigDto extends Pick<SignOptions, "expiresIn"> {
  secret: Secret;
}

interface PasswordConfigDto {
  saltRounds: number;
}

export interface ConfigDto {
  server: ServerConfigDto;
  database: DatabaseConfigDto;
  jwt: JwtConfigDto;
  password: PasswordConfigDto;
}
