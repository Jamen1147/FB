import { LoginParams } from '@fb/common';
import { Router, Request } from 'express';
import { TOKEN_KEY } from '../../constants/cookie';
import services from '../../services';
import validations from './validation';

const router = Router();

router.post(
  '/login',
  ...validations,
  (req: Request<any, any, LoginParams>, res, next) => {
    const { email, password } = req.body;
    services.auth
      .login({
        email,
        password,
      })
      .then(({ user, token }) => {
        res.setCookie(TOKEN_KEY, token);
        return user;
      })
      .then(res.success)
      .catch(next);
  }
);

export default router;
