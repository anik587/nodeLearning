import { Request, Response, NextFunction } from 'express';
import validatorRequests from '../app/app.validations';
import { ResponseUtils } from '../utils';

const validate = async (req: Request, res: Response, next: NextFunction) => {
  const key: Array<string> = req.originalUrl.split('/');
  const method: string = req.method.toLowerCase();
  const data = req.body;

  if (method === 'delete') return next();

  try {
    if (validatorRequests[key[3]][method]) {
      await validatorRequests[key[3]][method].validateAsync({ ...data });
    } else if (validatorRequests[key[3]][key[4]]) {
      await validatorRequests[key[3]][key[4]].validateAsync({ ...data });
    } else {
      await validatorRequests['default'].validateAsync({ ...data });
    }
  } catch (e) {
    new ResponseUtils(req, res).error(e).sendResp();
  }

  next();
};

export { validate };
