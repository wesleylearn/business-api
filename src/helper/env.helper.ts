import { EnvironmentException } from "@/error/custom.error";

export class EnvHelper {
  static get(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new EnvironmentException();
    }
    return value;
  }
}
