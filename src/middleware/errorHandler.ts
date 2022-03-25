import { Request, Response, NextFunction } from 'express';
import GeneralError from '@utils/generalError';

const debug = require('debug')('server:express-error-middleware');

const handleErrors = (
  err: GeneralError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof GeneralError) {
    const statusCode = err.getCode();
    debug(statusCode);
    debug(err.message);
    return res.status(statusCode).json({
      status: statusCode,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 500,
    message: err.message,
  });
};

export default handleErrors;
