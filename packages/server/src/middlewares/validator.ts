import { NextFunction, RequestHandler, Response, Request } from 'express';
import { validationResult } from 'express-validator';

const validator = (checks: RequestHandler[]) => [
  ...checks,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.fail(errors.array()[0].msg);
    }
    return next();
  },
];

export default validator;
