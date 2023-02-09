const _default = {
  env: process.env.NODE_ENV || 'development',
};

const cnf = require('./config.' + _default.env);
export const config = {
  ..._default,
  auth: cnf.authConfig,
  jwt: cnf.jwtConfig,
  web: cnf.webConfig,
  db: cnf.dbConfig,
  redis: cnf.redisConfig,
  rateLimit: cnf.rateLimitConfig,
  mife: cnf.mifeConfig,
};
