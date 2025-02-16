import bcrypt from "bcryptjs";
import { config } from "@/config";

export class PasswordHelper {
  static hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, config.password.saltRounds);
  }

  static verifyPassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
