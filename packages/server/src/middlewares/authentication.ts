import { Response, Request, NextFunction } from 'express';
import { TOKEN_KEY } from '../constants/cookie';
import { Unauthorized } from '../helpers/httpError';
import services from '../services';

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies[TOKEN_KEY] as string;
    if (!token) throw new Unauthorized('Unauthorized');
    const decoded = services.auth.verify({ token });
    req.user = decoded.user;
    next();
  } catch (error) {
    next(error);
  }
};

export default authenticate;
