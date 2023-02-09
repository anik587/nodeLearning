export const authConfig = {
  authenticationToken: 'authentication Bearer',
  redisIndex: 0,
};

export const webConfig = {
  host: 'localhost',
  port: 5001,
  baseURI: '/api',
  apiVersion: '/v1',
};

export const jwtConfig = {
  jwtSecret: 'mySupersecretKey',
  refreshTokenSecret: 'refreshTokenSecret',
  jwtTokenExpiry: '150m',
  refreshTokenExpiry: '3600m',
};

export const dbConfig = {
  username: 'root',
  password: 'nopass',
  host: 'localhost',
  port: 3306,
  dbName: 'subscription_api',
};

export const redisConfig = {
  port: '6379',
  redisUrl: '127.0.0.1',
};

export const rateLimitConfig = {
  requestWindow: 1000,
  requestLimit: 100,
};

export const mifeConfig = {
  curlTimeOutSec: 30,
  cacheKey: 'MIFE_CACHE',
  scope: 'PRODUCTION',
  appUrl: 'https://apigate.robi.com.bd',
  tokenPath: '/token',
  appKey: '',
  appSecret: '',
  username: '',
  password: '',
  grantType: 'password',
};
