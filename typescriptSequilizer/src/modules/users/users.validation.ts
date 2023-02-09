/* eslint-disable @typescript-eslint/camelcase */
import joi from 'joi';

export const usersCreateValidation = joi.object({
  name: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  username: joi
    .string()
    .required()
    .alphanum()
    .min(3)
    .max(30),
  password: joi
    .string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
  role: joi.string().required(),

  ip_list: joi.string(),

  is_active: joi
    .number()
    .integer()
    .required(),
});

export const usersUpdateValidation = joi.object({
  name: joi
    .string()
    .min(3)
    .max(30),
  username: joi
    .string()
    .alphanum()
    .min(3)
    .max(30),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  // .required(),
  role: joi.string(),

  ip_list: joi.string(),

  is_active: joi.number().integer(),
});
