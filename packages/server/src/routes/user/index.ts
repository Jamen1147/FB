import { Router, Request } from 'express';
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from '../../constants/cookie';
import authenticate from '../../middlewares/authentication';
import services from '../../services';
import { RegisterParams } from '../../services/user';
import validations from './validation';

const router = Router();

router.get('/me', authenticate, (req, res, next) => {
  services.user.getCurrentUser(req.user.id).then(res.success).catch(next);
});

router.post(
  '/',
  ...validations,
  (req: Request<any, any, RegisterParams>, res, next) => {
    const { email, password, name } = req.body;
    services.user
      .register({ email, password, name })
      .then(res.success)
      .catch(next);
  }
);

router.delete('/', authenticate, (req, res, next) => {
  services.user
    .unregister(req.user.id)
    .then(() => {
      res.clearCookie(TOKEN_KEY);
      res.clearCookie(REFRESH_TOKEN_KEY);
      return true;
    })
    .then(res.success)
    .catch(next);
});

export default router;
