import { BaseRouter } from '../../base';
import { PackagesController } from './';
import { authenticate, authorize, ratelimiter, validate } from '../../middlewares';

export class PackageRoute extends BaseRouter {
  constructor() {
    super('packages');
  }
  onInit(): void {
    const packages = new PackagesController();

    this.router.use(authenticate, authorize, ratelimiter, validate);

    this.router.route('/').get(packages.getAll);

    this.router.route('/sync').get(packages.syncBingePackages);
  }
}
