import { Router } from 'express';
import authenticate from '../../middlewares/authentication';
import validations from './validation';
import handlers from './handlers';

const router = Router();

router.get('/me', authenticate, handlers.getMe);

router.post('/', ...validations, handlers.register);

router.delete('/', authenticate, handlers.unregister);

export default router;
