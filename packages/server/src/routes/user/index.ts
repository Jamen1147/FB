import { Router, Request } from 'express';
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

export default router;
