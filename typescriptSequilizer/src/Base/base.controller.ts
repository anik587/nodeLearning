import { Response, Router } from 'express';
import _ from 'lodash';
import { JSONResponse } from '../interfaces';

/**
 * Base Controller
 */
export class BaseController {
  path: string;
  router: Router;

  /**
   *
   * @param {Response} response
   * @param {number|null} responseCode
   * @param {any} payload
   * @return {void}
   */
  public sendJSON(response: Response, responseCode: number | null, payload: any): void {
    const responseData = payload ? payload.responseData : null;
    if (responseCode !== undefined) {
      response.status(responseCode).json(responseData);
    } else {
      response.json(responseData);
    }
  }

  /**
   * @param {JSONResponse} responseData
   */
  public sendJSONResponse = async (responseData: JSONResponse) => {
    const payload = responseData?.data;
    const responseCode = responseData?.code;
    const response = responseData.response;

    try {
      const requestURLParts = responseData.request.path.split('/');
      const requestData = responseData.request.body;

      //@NOTE: it assumes that when there is no responseCode or response code is anything 2xx it is success case and
      //sends it for notification. But, in many cases, some controllers do sends 200 with `No node found`. Those places shouldn't use
      //2xx for such cases, trying catch that here as well for now
      const isSuccessfulOperation =
        (responseCode !== undefined && Math.floor(responseCode / 100) === 2) ||
        (responseCode === undefined && !payload.requestData?.message);

      if (isSuccessfulOperation && ['POST', 'PATCH', 'DELETE'].indexOf(responseData.request.method) > -1) {
        let entityId = '';

        if (responseData.request.method === 'POST') {
          //trying to extract entity id in case of post
          if (requestData?.uuid) {
            entityId = requestData?.uuid;
          }
          if (entityId === '' && payload.responseData?.uuid) {
            entityId = payload.responseData?.uuid;
          }
        } else if (
          (responseData.request.method === 'PATCH' || responseData.request.method === 'DELETE') &&
          requestURLParts.length >= 2
        ) {
          entityId = requestURLParts[2];
        }
        payload.requestData = !_.isEmpty(requestData) ? requestData : null;
        this.sendJSON(response, responseCode, payload);
      } else {
        this.sendJSON(response, responseCode, payload);
      }
    } catch (err) {
      this.sendJSON(response, responseCode, payload);
    }
  };
}
