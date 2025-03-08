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
  // the token will be in the authorization header with the format Bearer token
  const header = req.get('Authorization'); //* this will return the value of a header it will return value or undefined
  const parsedToken = req.get('Authorization')?.split('Bearer ')[1]; //* this splits the array, Bearer , aad second element of the array [1] would be a token.
  if (!header || !parsedToken)
    throw new ClientError(401, 'authentication required');
  const verifyToken = jwt.verify(parsedToken, hashKey); // this is where the payload is returned and this compares the paresedToken and haskey
  req.user = verifyToken as Request['user'];
  next();
}

//* The request.user will have the payload information about the clientInformation.Line 20 the request is sent from a user to user.key.
