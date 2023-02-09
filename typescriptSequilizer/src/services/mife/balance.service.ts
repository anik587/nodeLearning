import axios from 'axios';
import qs from 'qs';

import { mobile } from '../../types';
import { mife } from '../../../constants/mife';
import { constTime, MobileNumber, Taka, time } from '../../utils';

import BaseService from './base.service';

class BalanceService extends BaseService {
  static async getBalancePrepaid(mobileNumber: mobile) {
    try {
      let balance = 0;

      const headers = await this.getAuthHeaders();
      const requestUrl = this.getRequestUrl(mife.endpoint.prepaidBalanceQuery);
      const requestPayload = qs.stringify({
        CommandId: mife.command.queryBalance,
        RequestType: mife.requestType.event,
        SubscriberNo: MobileNumber.getShortNumber(mobileNumber),
      });

      const result = await axios.post(requestUrl, requestPayload, { headers });

      if ((result?.data?.ResultHeader?.ResultCode || null) === mife.resultCode.success) {
        const accounts = result?.data?.QueryBalanceResult?.BalanceRecord || [];

        accounts.filter(account => {
          if ((account?.BalanceDesc || null) === mife.balanceDescription.prepaidBalanceSubAccount) {
            balance = account.Balance;
          }
        });
      }

      return { balance: Taka.realAmount(balance) };
    } catch (error) {
      console.log('Error PreBalanceCheck', error);
      return { balance: 0 };
    }
  }

  static async getBalancePostPaid(mobileNumber: mobile) {
    try {
      let billable = 0;
      let outstanding = 0;
      let mainBalance = 0;
      let remainCredit = 0;

      const headers = await this.getAuthHeaders();
      const requestUrl = this.getRequestUrl(mife.endpoint.postpaidBalanceQuery);
      const requestPayload = qs.stringify({
        Version: mife.attribute.version,
        MessageSeq: time(),
        PrimaryIdentity: MobileNumber.getShortNumber(mobileNumber),
        OperatorID: mife.operatorId.three,
        BEID: mife.attribute.beId,
        BusinessCode: mife.businessCode.querySumBalanceAndCredit,
        ChannelID: mife.channelId.one,
        AccessMode: mife.accessMode.three,
        MsgLanguageCode: mife.msgLanguageCode.two,
        TimeZoneID: mife.attribute.timeZoneID,
        TimeType: mife.attribute.timeType,
      });

      const result = await axios.post(requestUrl, requestPayload, { headers });
      let accounts = result?.data?.QuerySumBalanceAndCreditResult?.SumBalanceAndCreditResult || [];

      if (!Array.isArray(accounts)) accounts = [accounts];

      accounts.map(account => {
        if ((account?.AcctKey || '').indexOf('.ID') < 0) {
          if (account.BalanceResult || null) {
            if ((account.BalanceType || '') === mife.balanceType.mainBillingAccount) {
              mainBalance = account?.BalanceResult?.TotalAmount || 0;
            }
          }

          if (account.UnbilledResult || null) {
            billable = account?.UnbilledResult?.ChargeAmount || 0;
          }

          if (account.OutStandingResult || null) {
            outstanding = account.OutStandingResult?.OutStandingAmount || 0;
          }

          if (account?.AccountCredit || null) {
            remainCredit = Taka.realAmount(account?.AccountCredit?.TotalRemainAmount || 0);
          }
        }
      });

      return {
        current_bill: Taka.realAmount(Number(outstanding) + Number(billable) - Number(mainBalance)),
        remain_credit: remainCredit,
      };
    } catch (error) {
      console.log('Error PostBill-1st', error);
      return { current_bill: 0, remain_credit: 0 };
    }
  }

  static async balanceDeduction(mobileNumber: mobile, amount: number) {
    try {
      const headers = await this.getAuthHeaders();
      const requestUrl = this.getRequestUrl(mife.endpoint.feeDeduction);
      const requestPayload = qs.stringify({
        Version: mife.attribute.version,
        BusinessCode: mife.businessCode.feeDeduction,
        MessageSeq: constTime,
        BEID: mife.attribute.beId,
        OperatorID: mife.operatorId.one,
        PrimaryIdentity: MobileNumber.getShortNumber(mobileNumber),
        DeductSerialNo: `${constTime}${time()}`,
        ChargeCode: mife.chargeCode.feeDeduction,
        ChargeAmt: Taka.robiAmount(amount),
        CurrencyID: mife.currencyId.two,
        AdditionalInfo: mife.chargeInfo.reel,
        ChargeSeq: `${constTime}${time()}`,
        SalesTime: constTime,
        InvoiceTime: constTime,
      });

      const result = await axios.post(requestUrl, requestPayload, { headers });

      if ((result?.data?.ResultHeader?.ResultCode || null) === mife.resultCode.successZero) {
        return { charged: 'success' };
      }

      return { charged: 'failed' };
    } catch (error) {
      console.log('Error BalanceDeduction', error);
      return { charged: 'failed' };
    }
  }
}

export { BalanceService };
