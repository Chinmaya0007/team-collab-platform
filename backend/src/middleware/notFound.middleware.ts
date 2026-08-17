import { NextFunction, Request, Response } from 'express';

import { AppError } from '../common/errors/AppError';

export const notFoundMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  next(
    new AppError(
      `Route ${req.originalUrl} not found`,
      404,
      'NOT_FOUND',
    ),
  );
};