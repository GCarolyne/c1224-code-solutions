/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';
import { request } from 'http';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const header = req.get('Authorization');
  const parsedToken = req.get('Authorization')?.split('Bearer ')[1];
  if (!header || !parsedToken)
    throw new ClientError(401, 'authentication required');
  const verifyToken = jwt.verify(parsedToken, hashKey);
  req.user = verifyToken as Request['user'];
  next();
}
