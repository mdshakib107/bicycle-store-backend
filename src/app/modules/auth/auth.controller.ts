import { Request, Response } from 'express';
import { authService } from './auth.service';
import HttpStatus from 'http-status';
import config from '../../config';
import catchAsync from 'src/app/utils/catchAsync';
import { sendResponse } from 'src/app/utils/sendResponse';

// register a user
const register = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.register(req.body);

  sendResponse.sendDataResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: HttpStatus.CREATED,
    data: result,
  });
});

// login a user
const login = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.login(req.body);

  const {refreshToken} = result;

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === 'production',
    sameSite: 'none',
  });

  sendResponse.sendDataResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: HttpStatus.CREATED,
    token: result.token!,
    data: result.user,
  });
});

// refresh token
const refreshToken = catchAsync(async (req: Request, res: Response) => {

  const {refreshToken} = req.cookies;
  
  const result = await authService.refreshToken(refreshToken);

  
  sendResponse.sendDataResponse(res, {
    success: true,
    message: 'Token refreshed successfully',
    statusCode: HttpStatus.OK,
    token: result.token,
    data: result.user,
  });
});

export const authController = {
  register,
  login,
  refreshToken,
};
