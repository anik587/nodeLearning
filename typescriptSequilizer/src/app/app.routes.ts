import { AuthRoute } from '../modules/auth/auth.route';
import { UsersRoute } from '../modules/users/users.route';
import { ChannelRoute } from '../modules/channels/channels.route';
import { PackageRoute } from '../modules/packages/packages.route';
import { ChannelPackageRoute } from '../modules/channelpackages/channelpackages.route';

export const Routes = [
  new AuthRoute(),
  new UsersRoute(),
  new ChannelRoute(),
  new PackageRoute(),
  new ChannelPackageRoute(),
];
