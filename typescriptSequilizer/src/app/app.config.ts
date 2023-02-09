import { config } from '../../config';
export class AppConfig {
  private routers: any[] = [];
  private apiPrefix: string;
  private cnf: object;
  constructor() {
    this.apiPrefix = '';
    this.setConfig();
  }

  setRouter(router: any): void {
    this.routers.push(router);
  }

  getRouter(): any[] {
    return this.routers;
  }

  setApiPrefix(prefix: string): void {
    this.apiPrefix = prefix;
  }

  getApiPrefix(): any {
    return this.apiPrefix;
  }

  setConfig(): any {
    this.cnf = config;
  }
  getCofig(): any {
    return this.cnf;
  }
}
