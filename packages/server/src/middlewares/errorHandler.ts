import { Response } from 'express';
import env from '../helpers/env';
import HttpError from '../helpers/httpError';

const errorHandler = (
  error: HttpError | Error,
  _: any,
  res: Response,
  __: any
) => {
  if (error instanceof HttpError) {
    return res.fail(error.message, error.getCode());
  }

  // eslint-disable-next-line no-console
  console.error(error);

  if (env.current === 'development') {
    return res.fail(`${error.message} -\n${error.stack}`, 500);
  }

  return res.fail(error.message, 500);
};

export default errorHandler;
