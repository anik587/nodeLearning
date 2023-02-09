/* eslint-disable @typescript-eslint/camelcase */
import joi from 'joi';

export const tokenValidation = joi.object({
  username: joi
    .string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: joi
    .string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
});

export const refreshValidation = joi.object({
  refreshToken: joi.string().required(),
});
