import { Request, Response } from 'express';
import { StatusCodes } from '../../utils';
import { BaseController } from '../../base';

// import { Channel } from '../../interfaces';
import { PackagesService } from './packages.services';
import { messages } from '../../enums';

export class PackagesController extends BaseController {
  private service = new PackagesService();

  constructor() {
    super();
  }

  public getById = async (request: Request, response: Response) => {
    try {
      const id = parseInt(request.params.id, 10);

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

  public getAll = async (request: Request, response: Response) => {
    try {
      const result = await this.service.getAll();

      response.status(StatusCodes.SUCCESS).json(result);
    } catch (error) {
      await this.sendJSONResponse({
        request,
        response,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        data: {
          responseData: error,
        },
      });
    }
  };

  public syncBingePackages = async (request: Request, response: Response) => {
    try {
      const result = await this.service.syncBingePackages();
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
}
