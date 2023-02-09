import { Request, Response, NextFunction } from 'express';

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  if (req.path === '/auth/login' || req.path === '/auth/getToken') return res.status(403).end();
  const user = Object.prototype.hasOwnProperty.call(req, 'user');
  if (!user) return res.status(403).end();
  const userRole = Object.prototype.hasOwnProperty.call(req['user'], 'role');
  if (!userRole) return res.status(403).end();
  if (req['user'].role !== 'admin') return res.status(403).end();
  next();
};

export { authorize };
