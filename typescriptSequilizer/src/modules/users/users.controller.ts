import { Request, Response } from 'express';
import { StatusCodes, ResponseUtils } from '../../utils';
import { BaseController } from '../../base';

import { UsersService } from './';
import { messages } from '../../enums';

/**
 * Users controller which handles
 * the user related requests
 */
export class UsersController extends BaseController {
  private service = new UsersService();

  /**
   * constructor
   */
  constructor() {
    super();
  }

  /**
   * Create new user.
   * @param {Request} request
   * @param {Response} response
   */
  public create = async (request: Request, response: Response) => {
    try {
      const user = request.body;
      const result = await this.service.create(user);

      new ResponseUtils(request, response).created(result).sendResp();
    } catch (er) {
      new ResponseUtils(request, response).error(er).sendResp();
    }
  };

  /**
   * Get users.
   * @param {Request} request
   * @param {Response} response
   */
  public getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.service.getUsers();

      new ResponseUtils(req, res).get(result).sendResp();
    } catch (er) {
      new ResponseUtils(req, res).error(er).sendResp();
    }
  };

  /**
   * Get user by id.
   * @param {Request} request
   * @param {Response} response
   */
  public getById = async (req: Request, res: Response) => {
    try {
      const result = await this.service.getById(req.params.id);

      new ResponseUtils(req, res).get(result).sendResp();
    } catch (er) {
      new ResponseUtils(req, res).error(er).sendResp();
    }
  };

  /**
   * Update an existing user.
   * @param {Request} request
   * @param {Response} response
   */
  public update = async (req: Request, res: Response) => {
    const user = req.body;
    const id: string = req.params.id;

    try {
      const result = await this.service.update(user, id);

      new ResponseUtils(req, res).update(result).sendResp();
    } catch (er) {
      new ResponseUtils(req, res).error(er).sendResp();
    }
  };

  /**
   * Delete an existing user.
   * @param {Request} request
   * @param {Response} response
   */
  public delete = async (req: Request, res: Response) => {
    try {
      const deletedUser = await this.service.delete(req.params.id);

      new ResponseUtils(req, res).delete({ message: `${deletedUser.name} was deleted` }).sendResp();
    } catch (er) {
      new ResponseUtils(req, res).error(er).sendResp();
    }
  };
}
