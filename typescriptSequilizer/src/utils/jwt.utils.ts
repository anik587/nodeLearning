/* eslint-disable @typescript-eslint/camelcase */
import jwt from 'jsonwebtoken';

import { User, Token } from '../interfaces';

export const signToken = async (user: User, secretKey: string, expiresIn: string) => {
  const payloadForToken = {
    id: user.id,
    name: user.name,
    role: user.role,
  };
  return {
    token: jwt.sign(payloadForToken, `${secretKey}`, { expiresIn }),
    expiresIn: expiresIn,
  };
};

export const verifyToken = async (token: string, secret: string) => {
  return jwt.verify(token, `${secret}`) as Token;
};
