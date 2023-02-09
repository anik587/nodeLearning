/* eslint-disable @typescript-eslint/camelcase */
import joi from 'joi';

export const channelCreateValidation = joi.object({
  name: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  user_id: joi
    .number()
    .min(1)
    .required(),
});

export const channelUpdateValidation = joi.object({
  name: joi
    .string()
    .min(3)
    .max(30)
    .required(),
  user_id: joi
    .number()
    .min(1)
    .required(),
});
