import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import expressWinston from 'express-winston';
import helmet from 'helmet';
import cors from 'cors';
import winston from 'winston';
import cnf from 'config';

import { AppConfig } from './app.config';
import { MySql, Redis, validatePath, errorHandler } from '../utils';
import { BaseRouter } from '../base';

/**
 * Main app class
 */
export class App {
  public app: express.Application;
  private environment: string;
  private host: string;
  private port: number;
  private mysql = MySql.getInstance();

  constructor(private readonly config: AppConfig) {
    this.app = express();
    Redis.getInstance();
    this.initializeInfoLoggingHandling();
  }
  /**
   * App start point
   */
  public async listen() {
    await this.mysql.checkDBConnection();
    await this.init();
    this.app.use(errorHandler);
    return this.app.listen(this.port, this.host, () => {
      console.info(`Server is available at http://${this.host}:${this.port}`);
    });
  }

  async init(): Promise<this> {
    await this.registerRouter();

    process.on('unhandledRejection', error => {
      throw error;
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process.on('uncaughtException', (error: any) => {
      if (!error.isOperational) process.exit(1);
    });

    return this;
  }

  public async registerRouter() {
    const routers = this.config.getRouter();
    const getPrefix = this.config.getApiPrefix();
    const apiPrefix = validatePath(getPrefix);
    routers.forEach((router: BaseRouter) => {
      const path = apiPrefix + router.prefix;
      this.app.use(path, router.router);
      //this.logger.log(`Configure service ${path}`);
    });
  }

  public modulesInitializer(routers: Array<unknown>): void {
    routers.forEach(router => {
      this.config.setRouter(router);
    });
  }

  /**
   * Initializes information logging handling
   */
  private initializeInfoLoggingHandling() {
    this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
      });
    });

    this.app.use(
      expressWinston.logger({
        level: this.environment === 'production' ? 'error' : 'info',
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize()),
          }),
        ],
        requestWhitelist: ['body'],
        statusLevels: {
          success: 'info',
          warn: 'warn',
          error: 'error',
        },
      }),
    );

    process.on('uncaughtException', error => {
      console.log(error);
      console.error(`uncaughtException ${error.message}`);
    });
  }
  public appConfiguration() {
    const cnf = this.config.getCofig();
    this.host = cnf.web.host;
    this.port = cnf.web.port;
    this.environment = cnf.env;
  }

  public bodyParser() {
    const parserList = {
      jsonParser: bodyParser.json(),
      urlencodedParser: bodyParser.urlencoded({ extended: true }),
    };
    Object.keys(parserList).forEach(parser => {
      this.app.use(parserList[parser]);
    });
  }

  public helmet(options: object) {
    this.app.use(helmet(options));
  }

  public ejs() {
    this.app.set('view engine', 'ejs');
  }

  public cors(options?: cors.CorsOptions) {
    this.app.use(cors(options));
  }

  public addStaticFolder(routeName: string): void {
    this.app.use(`/${routeName}`, express.static(routeName));
  }

  public apiPrefix(prefix: string) {
    this.config.setApiPrefix(prefix);
  }
}
