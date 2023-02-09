import { NextFunction, Response } from 'express';
import { config } from '../../config';

import { UsersSchema } from '../modules';
import { RequestWithUser } from '../interfaces';
import { TokenMissing, WrongToken } from '../utils';
import { verifyToken } from '../utils/jwt.utils';

/**
 * Auth middleware
 */

const authenticate = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  try {
    const authHeader = request.headers.authorization ? request.headers.authorization : '';
    if (!authHeader) next(new TokenMissing());

    const token = authHeader.split(' ')[1].trim();
    const secret = config.jwt.jwtSecret;
    const verificationResponse = await verifyToken(token, secret);
    const userId = verificationResponse.id;
    const user = await UsersSchema.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) next(new WrongToken());
    request.user = user.get();
    next();
  } catch (error) {
    next(new WrongToken());
  }
};

export { authenticate };
