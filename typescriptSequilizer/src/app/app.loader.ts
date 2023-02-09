import { config } from '../../config';
import { App, AppConfig, Routes } from '.';

export const expressLoader = async () => {
  const app = new App(new AppConfig());
  app.appConfiguration();
  app.bodyParser();
  app.helmet({});
  app.cors();

  app.addStaticFolder('uploads');
  app.apiPrefix(`${config.web.baseURI}${config.web.apiVersion}`);
  app.ejs();
  app.modulesInitializer(Routes);
  app.listen();
};
