import { config } from '../../config';
import { RedisClient, createClient } from 'redis';
import { InternalServerError } from './';

class Redis {
  private static instance: Redis;
  private client: RedisClient;
  private url: string = config.redis.redisUrl;
  private port: number = config.redis.port;

  constructor() {
    this.connectredis();
  }

  private connectredis = () => {
    this.client = createClient(this.port, this.url);
    this.client.on('ready', function(error: any) {
      console.log('Redis server connection ready');
    });

    this.client.on('connect', function(error: any) {
      console.log('Redis server connecting');
    });

    this.client.on('reconnecting', function(error: any) {
      console.log('Redis server reconnected');
    });

    this.client.on('end', function(error: any) {
      console.log('Redis server connection end');
    });

    this.client.on('error', function(error: { message: string | number }) {
      console.log(`Redis error ${error.message}`);
    });

    this.client.on('warning', function(warn: { message: string | number }) {
      console.log(`Redis warning ${warn.message}`);
    });
  };

  static getInstance(): Redis {
    if (!Redis.instance) {
      Redis.instance = new Redis();
    }
    return Redis.instance;
  }

  getRedisClient = () => {
    return this.client;
  };
  getRedisData = async (table: string | number, key: string) => {
    this.client.select(table);
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, res) => {
        if (err) reject(new InternalServerError(['Internal server error.']));
        if (res === null) resolve(false);
        resolve(res);
      });
    });
  };
  setRedisData = (table: string | number, key: string, value: string) => {
    this.client.select(table);
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (err, res) => {
        if (err) reject(new InternalServerError(['Internal server error.']));
        if (res !== 'OK') resolve(false);
        resolve(true);
      });
    });
  };
  delRedisData = (table: string | number, key: string | string[]) => {
    this.client.select(table);
    return new Promise((resolve, reject) => {
      this.client.del(key, (err, res) => {
        if (err) reject(new InternalServerError(['Internal server error.']));
        if (res) resolve(true);
        resolve(false);
      });
    });
  };
}

export { Redis };
