const axios = require('axios');
const qs = require('qs');

import { mobile } from '../../types';
import { mife } from '../../../constants/mife';
import { MobileNumber } from '../../utils';

import BaseService from './base.service';

class PackService extends BaseService {
  static async assignPack(mobileNumber: mobile, packId: string) {
    try {
      const headers = await this.getAuthHeaders();
      const requestUrl = this.getRequestUrl(mife.endpoint.packProvisioning);
      const requestPayload = qs.stringify({
        name: packId,
        MSISDN: MobileNumber.getNumber(mobileNumber),
      });

      const result = await axios.post(requestUrl, requestPayload, { headers });

      if ((result?.data?.ResponseCode || null) === mife.resultCode.successZero) {
        console.log(result?.data);

        return { provisioning: 'success' };
      }

      return { provisioning: 'failed' };
    } catch (error) {
      console.log('Error PackProvisioning', error);
      return { provisioning: 'failed' };
    }
  }

  static async checkProvisioningStatus(transactionId: string) {
    try {
      const headers = await this.getAuthHeaders();
      const requestUrl = this.getRequestUrl(mife.endpoint.queryPlanPurchase + transactionId);

      const result = await axios.get(requestUrl, { headers });

      console.log(result?.data || null);
    } catch (error) {
      console.log('Error ProvisioningStatus', error);
      return { provisioning: 'failed' };
    }
  }
}

export { PackService };
