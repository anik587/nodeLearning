'use strict';

const constants = require('./constants');

module.exports = function (status, code, data) {
    status = status || constants.HTTP_CODES.OK;
    code = code || constants.APP_CODES.SUCCESS();

    const response = {
        status: status,
        code: code.code,
        title: code.title,
        details: code.details,
        timestamp: Math.floor(Date.now() / 1000)
    };

    if (data) response.data = data;

    if (response.data && !(response.data instanceof Array)) {
        response.data = [response.data];
    }

    return response;
};