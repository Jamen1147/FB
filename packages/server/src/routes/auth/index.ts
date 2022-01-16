import { Router } from 'express';
import authenticate from '../../middlewares/authentication';
import validations from './validation';
import handlers from './handlers';

const router = Router();

router.post('/login', ...validations, handlers.login);

router.get('/logout', authenticate, handlers.logout);

router.get('/refresh', handlers.refresh);

export default router;
