import axios from 'axios';
import qs from 'qs';
import { config } from '../../../config';
import { Base64 } from '../../utils';

class AuthService {
  static async getAuthToken() {
    const appKey = config.mife.appKey || null;
    const appSecret = config.mife.appSecret || null;
    const headers = {
      Accept: 'application/json',
      Authorization: `Basic ${Base64.encode(`${appKey}:${appSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const payload = qs.stringify({
      username: config.mife.username || null,
      password: config.mife.password || null,
      grant_type: 'password',
    });

    try {
      const appBaseUrl = config.mife.appUrl.replace(/\/$/, '');
      const requestUrl = `${appBaseUrl}/${config.mife.tokenPath.replace(/^\//, '')}`;

      return await axios.post(requestUrl, payload, { headers });
    } catch (error) {
      console.log(error.mesage);
      throw new Error('Authentication failed due to auth server issue');
    }
  }
}

export { AuthService };
