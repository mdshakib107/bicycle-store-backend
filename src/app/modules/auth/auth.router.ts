import { Router } from 'express';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';
import validateRequest from 'src/app/middlewares/validateRequest';
import { UserValidation } from '../user/user.validation';

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

export default authRouter;
