import { NextFunction, Request, Response } from 'express';

import { AppError } from '../common/errors/AppError';
import { errorResponse } from '../common/responses/apiResponse';
import { env } from '../config/env';
import { logger } from '../config/logger';

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  logger.error(err);

  if (err instanceof AppError) {
    errorResponse(
      res,
      err.message,
      err.statusCode,
      err.code,
    );
    return;
  }

  errorResponse(
    res,
    env.NODE_ENV === 'production'
      ? 'Internal Server Error'
      : err.message,
    500,
    'INTERNAL_SERVER_ERROR',
  );
};