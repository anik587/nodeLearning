/* eslint-disable @typescript-eslint/camelcase */
import joi from 'joi';

export const channelpackagesCreateValidation = joi.object({
  channels_id: joi
    .number()
    .min(1)
    .integer()
    .required(),
  packages_id: joi
    .number()
    .min(1)
    .integer()
    .required(),
});

export const channelpackagesUpdateValidation = joi.object({
  channels_id: joi
    .number()
    .min(1)
    .integer()
    .required(),
  packages_id: joi
    .number()
    .min(1)
    .integer()
    .required(),
});
