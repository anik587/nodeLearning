import { AuthService } from '.';
import { config } from '../../../config';
abstract class BaseService {
  protected static async getAuthToken() {
    const authToken = await AuthService.getAuthToken();

    const token = authToken?.data?.access_token || '';
    const tokenType = authToken?.data?.token_type || '';

    if (!token || !tokenType) {
      throw new Error('Received invalid response from server');
    }

    return {
      Authorization: `${tokenType} ${token}`,
    };
  }

  protected static async getAuthHeaders() {
    const authToken = await this.getAuthToken();

    return {
      ...authToken,
      timeout: 1000 * Number(config.mife.curlTimeOutSec || 30),
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  }

  protected static getRequestUrl(urlSuffix: string) {
    return `${config.mife.appUrl.replace(/\/$/, '')}/${urlSuffix.replace(/^\//, '')}`;
  }
}

export default BaseService;
