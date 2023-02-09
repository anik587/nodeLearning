import { BaseRouter } from '../../base';
import { ChannelsController } from './';
import { authenticate, authorize, ratelimiter, validate } from '../../middlewares';

export class ChannelRoute extends BaseRouter {
  constructor() {
    super('channels');
  }
  onInit(): void {
    const channels = new ChannelsController();
    this.router.use(authenticate, authorize, ratelimiter, validate);
    this.router
      .route('/')
      .get(channels.getAll)
      .post(channels.create);

    this.router
      .route('/:id')
      .get(channels.getById)
      .patch(channels.update)
      .delete(channels.delete);
  }
}
