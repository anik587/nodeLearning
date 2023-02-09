import rateLimit from 'express-rate-limit';
import { config } from '../../config';

const maxWIndow: number = parseInt(config.rateLimit.requestWindow, 10) * 1000;
const max: number = parseInt(config.rateLimit.requestLimit, 10);
const message = 'Too many request from this IP, please try again after an hour';
const ratelimiter = rateLimit({
  windowMs: maxWIndow,
  max: max,
  message: message,
});

export { ratelimiter };
