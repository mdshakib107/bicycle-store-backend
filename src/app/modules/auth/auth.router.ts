import { Router } from 'express';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';
import validateRequest from 'src/app/middlewares/validateRequest';
import { UserValidation } from '../user/user.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './../user/user.constant';

const authRouter = Router();

authRouter.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  authController.register,
);
authRouter.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  authController.login,
);
authRouter.post(
  '/refreshToken',
  validateRequest(authValidation.refreshTokenValidationSchema),
  authController.refreshToken,
);

authRouter.put(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  validateRequest(authValidation.changePasswordValidationSchema),
  authController.changePassword,
);

export default authRouter;
