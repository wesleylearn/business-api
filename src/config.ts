import { ConfigDto } from "@/dto/config.dto";
import dotenv from "dotenv";
import { EnvHelper } from "@/helper/env.helper";
dotenv.config();

export const config: ConfigDto = {
  server: {
    environment: process.env.NODE_ENV || "development",
    port: parseInt(process.env.PORT || "3000"),
  },

  database: {
    url: EnvHelper.get("DATABASE_URL"),
    name: EnvHelper.get("DATABASE_ROOT_NAME"),
    user: EnvHelper.get("DATABASE_ROOT_USERNAME"),
    password: EnvHelper.get("DATABASE_ROOT_PASSWORD"),
  },

  jwt: {
    secret: EnvHelper.get("JWT_SECRET"),
    expiresIn: "24h",
  },

  password: {
    saltRounds: parseInt(process.env.SALT_ROUNDS || "10"),
  },
};
