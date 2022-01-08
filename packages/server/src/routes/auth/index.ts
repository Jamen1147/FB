import { LoginParams } from '@fb/common';
import { Router, Request } from 'express';
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from '../../constants/cookie';
import authenticate from '../../middlewares/authentication';
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
      .then(({ user, token, refreshToken }) => {
        res.setCookie(TOKEN_KEY, token);
        res.setCookie(REFRESH_TOKEN_KEY, refreshToken);
        return user;
      })
      .then(res.success)
      .catch(next);
  }
);

router.get('/logout', authenticate, (req, res, next) => {
  res.clearCookie(TOKEN_KEY);
  res.clearCookie(REFRESH_TOKEN_KEY);
  services.auth.revokeToken(req.user.id).then(res.success).catch(next);
});

router.get('/refresh', (req, res, next) => {
  services.auth
    .refreshToken(req.cookies[REFRESH_TOKEN_KEY])
    .then(({ newToken, newRefreshToken }) => {
      res.setCookie(TOKEN_KEY, newToken);
      res.setCookie(REFRESH_TOKEN_KEY, newRefreshToken);
      return true;
    })
    .then(res.success)
    .catch(next);
});

export default router;
