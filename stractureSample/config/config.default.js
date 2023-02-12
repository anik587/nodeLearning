'use strict';

module.exports = {
    env : process.env.NODE_ENV || 'development',
    system: {

    },
    defaultSettings: {
        maxSMSCount: 3,
        maxFailedLoginAttempt: 5,
        ttlResetPassword: 3600
    },
    tokenLength: {
        session: 40,
        resetPassword: 64
    },
    mail: {
        driver: {
            host: '',
            port: '',
            secure: false,
            requireTLS: true,
            auth:{
                username: '',
                password: ''
            }
        },
        general: {
            mailer: ''
        }
    }
}