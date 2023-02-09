import joi from 'joi';
import { tokenValidation, refreshValidation } from '../modules/auth/auth.validation';
import { usersCreateValidation, usersUpdateValidation } from '../modules/users/users.validation';
import { packagesCreateValidation, packagesUpdateValidation } from '../modules/packages/packages.validation';
import { channelCreateValidation, channelUpdateValidation } from '../modules/channels/channels.validation';
import {
  channelpackagesCreateValidation,
  channelpackagesUpdateValidation,
} from '../modules/channelpackages/channelpackages.validation';

export const defaultvalidation = joi.object({
  limit: joi
    .number()
    .integer()
    .min(1),
  offset: joi
    .number()
    .integer()
    .min(1),
});

export default {
  default: defaultvalidation,
  auth: { post: tokenValidation, patch: refreshValidation },
  users: { post: usersCreateValidation, patch: usersUpdateValidation },
  packages: { post: packagesCreateValidation, patch: packagesUpdateValidation },
  channels: { post: channelCreateValidation, patch: channelUpdateValidation },
  channelpackages: { post: channelpackagesCreateValidation, patch: channelpackagesUpdateValidation },
};
