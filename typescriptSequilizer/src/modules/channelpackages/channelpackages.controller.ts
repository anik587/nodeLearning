import { Request, Response } from 'express';
import { StatusCodes } from '../../utils';
import { BaseController } from '../../base';

import { ChannelPackagesService } from './';
import { messages } from '../../enums';

export class ChannelPackagesController extends BaseController {
  private service = new ChannelPackagesService();

  constructor() {
    super();
  }

  public getById = async (request: Request, response: Response) => {
    try {
      const id: number = parseInt(request.params.id, 10);

      const result = await this.service.getById(id);
      if (result === null) {
        response.status(StatusCodes.NOT_FOUND).json({ message: messages.PackageNotFoundError });
      } else {
        response.status(StatusCodes.SUCCESS).json(result);
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

  public create = async (request: Request, response: Response) => {
    const module = request.body;
    try {
      const result = await this.service.create(module);
      if (!result) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: messages.PackageCreateError },
          },
        });
      } else {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.CREATED,
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

  public getAll = async (request: Request, response: Response) => {
    try {
      const result = await this.service.getAll();
      if (result === null) {
        response.status(StatusCodes.NOT_FOUND).json({ message: messages.PackageNotFoundError });
      } else {
        response.status(StatusCodes.SUCCESS).json(result);
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

  public update = async (request: Request, response: Response) => {
    const data = request.body;
    const id: number = parseInt(request.params.id, 10);
    try {
      const result = await this.service.update(data, id);
      if (result === null) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: messages.PackageUpdateError },
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

  public delete = async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10);

    try {
      const result = await this.service.destroy(id);
      if (result === null) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: messages.PackageDeleteError },
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
