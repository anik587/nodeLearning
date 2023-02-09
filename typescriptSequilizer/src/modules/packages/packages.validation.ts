/* eslint-disable @typescript-eslint/camelcase */
import joi from 'joi';

export const packagesCreateValidation = joi.object({
  original_id: joi
    .number()
    .min(1)
    .integer()
    .required(),
  title: joi
    .string()
    .min(1)
    .max(30)
    .required(),
  device_type: joi
    .string()
    .min(1)
    .max(30)
    .required(),
  payment_mode: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  auto_renewal: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  is_corporate: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  no_of_validity_days: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  charge_amount: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  display_amount: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  data_pack_name: joi
    .string()
    .min(1)
    .max(4)
    .required(),
});

export const packagesUpdateValidation = joi.object({
  original_id: joi
    .number()
    .min(1)
    .integer()
    .required(),
  title: joi
    .string()
    .min(1)
    .max(30)
    .required(),
  device_type: joi
    .string()
    .min(1)
    .max(30)
    .required(),
  payment_mode: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  auto_renewal: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  is_corporate: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  no_of_validity_days: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  charge_amount: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  display_amount: joi
    .string()
    .min(1)
    .max(4)
    .required(),
  data_pack_name: joi
    .string()
    .min(1)
    .max(4)
    .required(),
});
