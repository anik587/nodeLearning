import { expressLoader } from './app';

async function bootstrap(): Promise<void> {
  expressLoader();
}
bootstrap();
