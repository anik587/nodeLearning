/* eslint-disable @typescript-eslint/camelcase */
import { config } from '../../../config';

import { LoginResponse } from '../../interfaces';
import { UsersSchema as Schema } from '../../modules';
import { BadRequestError, InternalServerError, verifyPassword, signToken, verifyToken, Redis } from '../../utils';

/**
 * Auth service that handles auth related operations
 */
export class AuthService {
  private jwtSecret: string = config.jwt.jwtSecret;
  private jwtExpiry: string = config.jwt.jwtTokenExpiry;
  private refreshTokenSecret: string = config.jwt.refreshTokenSecret;
  private refreshExpiry: string = config.jwt.refreshTokenExpiry;
  private instance: Redis;
  private index: number = config.auth.redisIndex;
  constructor() {
    this.instance = Redis.getInstance();
  }
  /**
   * Logging is an existing user
   * @param {User} user - user object
   * @return {Promise<User>} - newly created user
   */
  public async token(loginCredentials: any): Promise<LoginResponse> {
    try {
      const response = await Schema.findOne({
        where: {
          username: loginCredentials.username,
        },
      });
      const user = response.get();
      const redisKey = `${user.id}`;
      if (!user) throw new BadRequestError(['Request is not correct']);
      const isPasswordMatching = await verifyPassword(loginCredentials.password, user.password);
      if (!isPasswordMatching) throw new BadRequestError(['Request is not correct']);

      const accessToken = await signToken(user, `${this.jwtSecret}`, this.jwtExpiry);
      const refreshToken = await signToken(user, `${this.refreshTokenSecret}`, this.refreshExpiry);
      console.log(refreshToken);
      await this.instance.setRedisData(this.index, redisKey, refreshToken.token);
      return {
        accessToken: accessToken.token,
        refreshToken: refreshToken.token,
        statusCode: 200,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerError(['bbInternal server error.']);
    }
  }

  /**
   * Get access token for a user
   * @param {refreshToken} refreshToken - string
   * @return {Promise<string>} - newly created access token
   */
  public async refresh(refreshToken: string): Promise<any> {
    try {
      const verificationResponse = await verifyToken(refreshToken, `${this.refreshTokenSecret}`);
      const key = verificationResponse.id;
      const refresh = await this.instance.getRedisData(this.index, key);
      if (refresh === refreshToken) {
        const accessToken = await signToken(verificationResponse, `${this.jwtSecret}`, this.jwtExpiry);
        return {
          accessToken: accessToken.token,
        };
      } else {
        throw new BadRequestError(['Token Mismatch']);
      }
    } catch (error) {
      throw new InternalServerError(['Internal server error.']);
    }
  }

  public async delete(refreshToken: string): Promise<any> {
    try {
      const verificationResponse = await verifyToken(refreshToken, `${this.refreshTokenSecret}`);
      const key = verificationResponse.id;
      const refresh = await this.instance.delRedisData(this.index, key);
      if (!refresh) throw new BadRequestError(['Token Mismatch']);
      return {
        status: 200,
      };
    } catch (error) {
      throw new InternalServerError(['Internal server error.']);
    }
  }
}
