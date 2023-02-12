'use strict';

module.exports = {
    CONTINUE: 100, // Continue
    SWITCHING_PROTOCOLS: 101, // Switching Protocols
    PROCESSING: 102, // Processing

    OK: 200, // OK
    CREATED: 201, // Created
    ACCEPTED: 202, // Accepted
    NON_AUTHORITATIVE_INFORMATION: 203, // Non Authoritative Information
    NO_CONTENT: 204, // No Content
    RESET_CONTENT: 205, // Reset Content
    PARTIAL_CONTENT: 206, // Partial Content
    MULTI_STATUS: 207, // Multi-Status

    MULTIPLE_CHOICES: 300, // Multiple Choices
    MOVED_PERMANENTLY: 301, // Moved Permanently
    MOVED_TEMPORARILY: 302, // Moved Temporarily
    SEE_OTHER: 303, // See Other
    NOT_MODIFIED: 304, // Not Modified
    USE_PROXY: 305, // Use Proxy
    TEMPORARY_REDIRECT: 307, // Temporary Redirect
    PERMANENT_REDIRECT: 308, // Permanent Redirect

    BAD_REQUEST: 400, // Bad Request
    UNAUTHORIZED: 401, // Unauthorized
    PAYMENT_REQUIRED: 402, // Payment Required
    FORBIDDEN: 403, // Forbidden
    NOT_FOUND: 404, // Not Found
    METHOD_NOT_ALLOWED: 405, // Method Not Allowed
    NOT_ACCEPTABLE: 406, // Not Acceptable
    PROXY_AUTHENTICATION_REQUIRED: 407, // Proxy Authentication Required
    REQUEST_TIMEOUT: 408, // Request Timeout
    CONFLICT: 409, // Conflict
    GONE: 410, // Gone
    LENGTH_REQUIRED: 411, // Length Required
    PRECONDITION_FAILED: 412, // Precondition Failed
    REQUEST_TOO_LONG: 413, // Request Entity Too Large
    REQUEST_URI_TOO_LONG: 414, // Request-URI Too Long
    UNSUPPORTED_MEDIA_TYPE: 415, // Unsupported Media Type
    REQUESTED_RANGE_NOT_SATISFIABLE: 416, // Requested Range Not Satisfiable
    EXPECTATION_FAILED: 417, // Expectation Failed
    IM_A_TEAPOT: 418, // I'm a teapot
    INSUFFICIENT_SPACE_ON_RESOURCE: 419, // Insufficient Space on Resource
    METHOD_FAILURE: 420, // Method Failure
    UNPROCESSABLE_ENTITY: 422, // Unprocessable Entity
    LOCKED: 423, // Locked
    FAILED_DEPENDENCY: 424, // Failed Dependency
    PRECONDITION_REQUIRED: 428, // Precondition Required
    TOO_MANY_REQUESTS: 429, // Too Many Requests
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431, // Request Header Fields Too Large

    INTERNAL_SERVER_ERROR: 500, // Server Error
    NOT_IMPLEMENTED: 501, // Not Implemented
    BAD_GATEWAY: 502, // Bad Gateway
    SERVICE_UNAVAILABLE: 503, // Service Unavailable
    GATEWAY_TIMEOUT: 504, // Gateway Timeout
    HTTP_VERSION_NOT_SUPPORTED: 505, // HTTP Version Not Supported
    INSUFFICIENT_STORAGE: 507, // Insufficient Storage
    NETWORK_AUTHENTICATION_REQUIRED: 511 // Network Authentication Required
};
