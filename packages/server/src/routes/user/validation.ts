import { check } from 'express-validator';
import validator from '../../middlewares/validator';

const validations = validator([
  check('name', 'name is required').not().isEmpty(),
  check('email', 'invalid email').isEmail(),
  check(
    'password',
    'password should be at least 6 or more characters'
  ).isLength({
    min: 6,
  }),
]);

export default validations;
