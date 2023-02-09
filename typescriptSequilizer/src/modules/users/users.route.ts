import { UsersController } from './users.controller';
import { BaseRouter } from '../../base';
import { authenticate, authorize, ratelimiter, validate } from '../../middlewares';

/**
 * Users route
 * Handles auth related request
 */
export class UsersRoute extends BaseRouter {
  constructor() {
    super('users');
  }

  onInit(): void {
    const user = new UsersController();

    this.router.use(authenticate, authorize, ratelimiter, validate);

    this.router
      .route('/')
      .get(user.getAll)
      .post(user.create);

    this.router
      .route('/:id')
      .get(user.getById)
      .patch(user.update)
      .delete(user.delete);
  }
}
