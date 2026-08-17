import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { jwtConfig } from "../config/jwt";
import { AppError } from "../common/errors/AppError";

export interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    throw new AppError(
      "Authentication required",
      401,
      "UNAUTHORIZED",
    );
  }

  const token = header.substring(7);

  try {
    const payload = jwt.verify(
      token,
      jwtConfig.accessTokenSecret,
    ) as { userId: string };

    req.userId = payload.userId;

    next();
  } catch {
    throw new AppError(
      "Invalid or expired access token",
      401,
      "INVALID_TOKEN",
    );
  }
};