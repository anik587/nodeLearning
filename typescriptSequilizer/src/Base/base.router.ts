import { Router } from 'express';
import { isString, validatePath } from '../utils/common.utils';

export abstract class BaseRouter {
  readonly prefix: string;
  readonly router: Router;

  constructor(name?: string | any) {
    this.prefix = this.__buildRouterName(name);
    this.router = Router();
    this.onInit();
  }

  private __buildRouterName(name?: string): string {
    name = name && isString(name) ? name : this.constructor.name.replace(/router/gi, '');
    if (name) return validatePath(name.toLocaleLowerCase());
    return 'none';
  }

  abstract onInit(): void;
}
