import { Request } from 'express';

/**
 * User object interface
 */
export interface User {
  id?: string;
  name?: string;
  password?: string;
  role?: string;
  ip_list?: string;
  is_active?: number;
  created_at?: Date;
  updated_at?: Date;
}

/**
 * RequestWithUser object interface
 */
export interface RequestWithUser extends Request {
  user: User;
}
