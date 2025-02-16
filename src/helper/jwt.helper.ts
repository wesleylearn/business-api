import jwt from "jsonwebtoken";
import { config } from "@/config";

export class JwtHelper {
  static generateToken(userId: string, email: string): string {
    return jwt.sign({ userId, email }, config.jwt.secret, {
      expiresIn: Number(config.jwt.expiresIn) || config.jwt.expiresIn,
    });
  }

  static verifyToken(token: string): any {
    return jwt.verify(token, config.jwt.secret);
  }
}
