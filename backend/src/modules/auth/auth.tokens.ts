import { randomUUID } from "crypto";
import jwt from "jsonwebtoken";

import { jwtConfig } from "../../config/jwt";

export function generateAccessToken(userId: string) {
  return jwt.sign(
    {
      userId,
    },
    jwtConfig.accessTokenSecret,
    {
      expiresIn: "15m",
      jwtid: randomUUID(),
    },
  );
}

export function generateRefreshToken(userId: string) {
  return jwt.sign(
    {
      userId,
    },
    jwtConfig.refreshTokenSecret,
    {
      expiresIn: "7d",
      jwtid: randomUUID(),
    },
  );
}