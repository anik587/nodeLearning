import axios from 'axios';
import qs from 'qs';

import { mobile } from '../../types';
import { mife } from '../../../constants/mife';
import { MobileNumber, time } from '../../utils';

import BaseService from './base.service';

class CustomerService extends BaseService {
  static async getCustomerInfo(mobileNumber: mobile) {
    try {
      const headers = await this.getAuthHeaders();
      const requestUrl = this.getRequestUrl(mife.endpoint.queryCustomerInfo);
      const requestPayload = qs.stringify({
        Version: mife.attribute.version,
        MessageSeq: time(),
        PrimaryIdentity: MobileNumber.getShortNumber(mobileNumber),
        OperatorID: mife.operatorId.three,
        BEID: mife.attribute.beId,
        BusinessCode: mife.businessCode.queryCustomerInfo,
      });

      const result = await axios.post(requestUrl, requestPayload, { headers });

      if ((result?.data?.ResultHeader?.ResultCode || null) === mife.resultCode.successZero) {
        return { data: result?.data?.ResultHeader?.ResultCode?.QueryCustomerInfoResult || null };
      }

      return { data: null };
    } catch (error) {
      console.log('Error QueryCustomer-1st', error);
      return { data: null };
    }
  }
}

export { CustomerService };
