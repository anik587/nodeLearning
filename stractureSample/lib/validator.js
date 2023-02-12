'use strict';

const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const paths = require('./path');
const reqgen = require('./res.generator');
const HTTP_CODES = require('./constants').HTTP_CODES;
const JOI_ERROR = require('./constants').APP_CODES.BAD_REQUEST_JOI_VALIDATION;


module.exports = function(req, res, next) {
    let schema = schemaMapping[req.originalUrl];
    if (!schema) return next();

    const validationResult = Joi.validate(req.body, schema, {convert: true});
    if (validationResult.error === null) return next();

    const firstError = validationResult.error.details.pop();
    res.json(respgen(HTTP_CODES.BAD_REQUEST, JOI_ERROR({details: firstError.message})));
};