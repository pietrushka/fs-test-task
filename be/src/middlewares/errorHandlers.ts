import { ErrorRequestHandler, Handler } from 'express';
import { isHttpError, NotFound } from 'http-errors';

// 4 paramethers must be specified, to let express know this middleware is errorHandler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler: ErrorRequestHandler = (error, _, res, next) => {
  console.error(error); 

  let statusCode = 500;
  let errorMessage = 'Server error';

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json({
    error: { message: errorMessage },
  });
};

export const notFoundHandler: Handler = (req, res, next) => {
  next(NotFound());
};
