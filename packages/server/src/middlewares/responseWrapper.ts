import { CookieOptions, NextFunction, Response } from 'express';
import env from '../helpers/env';

type ApiResponse<T, E> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: E;
};

const response = <T, E>(
  status: number,
  data?: T,
  error?: E
): ApiResponse<T, E> => ({
  ok: status.toString().startsWith('2'),
  data,
  error,
  status,
});

const defaultCookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  secure: env.current !== 'development',
  maxAge: 1000 * 60 * 60 * 24 * 7,
};

const responseWrapper = (_: any, res: Response, next: NextFunction) => {
  res.success = <T>(data: T, code = 200) => {
    res.status(code).json(response(code, data));
  };

  res.fail = (error: Record<string, unknown> | string, code = 400) => {
    res.status(code).json(response(code, undefined, error));
  };

  res.setCookie = (key, value, options) =>
    res.cookie(key, value, { ...defaultCookieOptions, ...(options || {}) });

  next();
};

export default responseWrapper;
