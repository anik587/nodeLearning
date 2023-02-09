/* eslint-disable @typescript-eslint/camelcase */
// import {Winston} from '../../helper/winston/winston';
// const { resEnd } = require('./util');
// const myModulePath = require('app-root-path').path;
import { Request, Response } from 'express';
import { BaseError, ConnectionRefusedError, ValidationError } from 'sequelize';

export class ResponseUtils {
  private _respStatus: number;
  private _respData: object;
  private _isSuccess: boolean;
  private _req: Request;
  private _res: Response;
  private _detailDebugData: object;

  constructor(req: Request, res: Response) {
    this._req = req;
    this._res = res;
  }

  private prepareResponsePayload(): any {
    // if (this._isSuccess) {
      return {
        success: this._isSuccess,
        status: this._respStatus,
        data: this._respData,
      };
    // }
  }

  public sendResp(): void {
    this._res.status(this._respStatus).json(this.prepareResponsePayload());
  }

  public created(data ?: object): ResponseUtils {
    this._respStatus = 201;
    this._respData = data;
    this._isSuccess = true;

    return this;
  }

  public get(data ?: object): ResponseUtils {
    this._respStatus = 200;
    this._respData = data;
    this._isSuccess = true;

    return this;
  }

  public update(data ?: object): ResponseUtils {
    this._respStatus = 201;
    this._respData = data;
    this._isSuccess = true;

    return this;
  }

  public delete(data ?: object): ResponseUtils {
    this._respStatus = 202;
    this._respData = data;
    this._isSuccess = true;

    return this;
  }

  // public badRequest(data ?: object): ResponseUtils {
  //   this._respStatus = 400;
  //   this._respData = data;
  //   this._isSuccess = false;

  //   return this;
  // }

  public error(er?: object): ResponseUtils {
    this._isSuccess = false;
    if (er instanceof ValidationError) {
      this._respStatus = 400;
      this._respData = er.errors.map(error => error.message);
    } else if (er instanceof ConnectionRefusedError) {
      this._respStatus = 500;
      this._respData = { error: er.message };
    } else if (er instanceof Error) {
      this._respStatus = 400;
      this._respData = { error: er.message };
    } else {
      this._respStatus = 500;
      this._respData = {};
    }

    this._detailDebugData = er;

    return this;
  }
}