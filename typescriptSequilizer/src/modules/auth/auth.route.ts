import { BaseRouter } from '../../base';
import { ratelimiter, validate } from '../../middlewares';
import { AuthController } from './auth.controller';
/**
 * Auth route
 * Handles auth related request
 */
export class AuthRoute extends BaseRouter {
  constructor() {
    super('auth');
  }

  onInit(): void {
    const auth = new AuthController();
    this.router.use(ratelimiter, validate);
    this.router
      .route('/token')
      .post(auth.token)
      .patch(auth.refresh)
      .delete(auth.delete);
  }
}
