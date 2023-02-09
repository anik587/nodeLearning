import { BaseRouter } from '../../base';
import { ChannelPackagesController } from './';
import { authenticate, authorize, ratelimiter, validate } from '../../middlewares';

export class ChannelPackageRoute extends BaseRouter {
  constructor() {
    super('channelpackages');
  }
  onInit(): void {
    const channelpackages = new ChannelPackagesController();
    this.router.use(authenticate, authorize, ratelimiter, validate);
    this.router
      .route('/')
      .get(channelpackages.getAll)
      .post(channelpackages.create);

    this.router
      .route('/:id')
      .get(channelpackages.getById)
      .patch(channelpackages.update)
      .delete(channelpackages.delete);
  }
}
