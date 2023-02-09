import { Request, Response, NextFunction } from 'express';

import { LoginRequest } from '../../interfaces';
import { StatusCodes } from '../../utils';
import { BaseController } from '../../base';
import { AuthService } from './';
import { messages } from '../../enums';

export class AuthController extends BaseController {
  private service = new AuthService();

  /**
   * constructor
   */
  constructor() {
    super();
  }
  /**
   * Logging in a user.
   * @param {Request} request
   * @param {Response} response
   */
  public token = async (request: Request, response: Response) => {
    const loginCredentials: LoginRequest = request.body;
    try {
      const result = await this.service.token(loginCredentials);
      if (result === null) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: messages.LoginError },
          },
        });
      } else {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.SUCCESS,
          data: {
            responseData: result,
          },
        });
      }
    } catch (error) {
      await this.sendJSONResponse({
        request: request,
        response: response,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        data: {
          responseData: error,
        },
      });
    }
  };

  /**
   * Get access token for a user.
   * @param {Request} request
   * @param {Response} response
   */
  public refresh = async (request: Request, response: Response) => {
    const { refreshToken } = request.body;
    try {
      const result = await this.service.refresh(refreshToken);
      if (result === null) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: messages.RefreshTokenError },
          },
        });
      } else {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.SUCCESS,
          data: {
            responseData: result,
          },
        });
      }
    } catch (error) {
      await this.sendJSONResponse({
        request: request,
        response: response,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        data: {
          responseData: error,
        },
      });
    }
  };

  /**
   * Get access token for a user.
   * @param {Request} request
   * @param {Response} response
   */
  public delete = async (request: Request, response: Response) => {
    const { refreshToken } = request.body;
    try {
      const result = await this.service.delete(refreshToken);
      if (result === null) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: messages.RefreshTokenError },
          },
        });
      } else {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.SUCCESS,
          data: {
            responseData: result,
          },
        });
      }
    } catch (error) {
      await this.sendJSONResponse({
        request: request,
        response: response,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        data: {
          responseData: error,
        },
      });
    }
  };
}
