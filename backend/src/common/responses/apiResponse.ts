import { Response } from 'express';

export const successResponse = <T>(
  res: Response,
  data: T,
  message = 'Success',
  statusCode = 200,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const createdResponse = <T>(
  res: Response,
  data: T,
  message = 'Created',
) => {
  return successResponse(res, data, message, 201);
};

export const noContentResponse = (res: Response) => {
  return res.status(204).send();
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number,
  code: string,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    code,
  });
};