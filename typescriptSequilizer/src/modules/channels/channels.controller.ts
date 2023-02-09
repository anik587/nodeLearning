import { Request, Response } from 'express';
import { StatusCodes } from '../../utils';
import { BaseController } from '../../base';

// import { Channel } from '../../interfaces';
import { ChannelsService } from './';
import { messages } from '../../enums';

export class ChannelsController extends BaseController {
  private service = new ChannelsService();

  constructor() {
    super();
  }

  public getById = async (request: Request, response: Response) => {
    try {
      const id: number = parseInt(request.params.id, 10);

      const result = await this.service.getById(id);
      if (result === null) {
        response.status(StatusCodes.NOT_FOUND).json({ message: messages.ChannelNotFound });
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
    const channel = request.body;
    try {
      const result = await this.service.create(channel);
      if (!result) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: messages.ChannelCreateError },
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
        response.status(StatusCodes.NOT_FOUND).json({ message: 'Channel was not found.' });
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
    const channel = request.body;
    const id: number = parseInt(request.params.id, 10);
    try {
      const result = await this.service.update(channel, id);
      if (result === null) {
        await this.sendJSONResponse({
          request: request,
          response: response,
          code: StatusCodes.UNPROCESSABLE_ENTITY,
          data: {
            responseData: { message: 'Unable to update channel.' },
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
            responseData: { message: messages.ChannelDeleteError },
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