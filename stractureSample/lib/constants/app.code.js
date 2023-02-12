'use strict';

const vsprintf = require('sprintf-js').vsprintf;


function getCode(code, title, details, options) {
    options = options || {};
    details = options.details || details;
    let args = options.args || [];
    return {
        code: code,
        title: title,
        details: vsprintf(details, args),
    };
}

module.exports = {
    SUCCESS: (options) => { return getCode(0, 'Success', 'Success', options)},
    USER_DUPLICATE_UNIQUE_KEY: ()=>{return getCode(1, 'BAD REQUEST', 'DUPLICATE USER PHONE', options)},
    BAD_REQUEST_JOI_VALIDATION: (options) => { return getCode(1, 'Bad Request', 'Bad Request', options)},
    BAD_REQUEST: (options) => { return getCode(254, 'Bad request', 'Bad request', options)},
    INTERNAL_SERVER_ERROR: (options) => { return getCode(255, 'Internal Server Error', 'Internal Server Error', options)}
};