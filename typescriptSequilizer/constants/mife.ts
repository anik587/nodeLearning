export const mife = {
  endpoint: {
    queryCustomerInfo: '/cbsQueryCustomerInfo/v1/cbsQueryCustomerInfo',
    prepaidBalanceQuery: '/cbsPrepaidQueryBalance/v1/queryBalance',
    postpaidBalanceQuery: '/cbs/cbsQuerySumBalanceAndCredit/v1/cbsQuerySumBalanceAndCredit',
    queryPlanPurchase: '/adcsqueryPlanPurchase/v1/queryPlanPurchase?transactionId=',

    feeDeduction: '/cbsFeeDeductionBoth/v1/cbsFeeDeduction',
    packProvisioning: '/adcsPackProvisioningNormal/v1/packProvisioningNormal',
  },

  command: {
    queryBalance: 'QueryBalance',
  },

  requestType: {
    event: 'Event',
  },

  businessCode: {
    feeDeduction: 'FeeDeduction',
    queryCustomerInfo: 'QueryCustomerInfo',
    querySumBalanceAndCredit: 'QuerySumBalanceAndCredit',
  },

  chargeCode: {
    feeDeduction: 'C_FEE_DEDUCTION_CHARGE_CODE',
  },

  chargeInfo: {
    reel: 'Robi Reel Service Charge',
  },

  balanceType: {
    mainBillingAccount: 'C_MAIN_BILLING_ACCOUNT',
  },

  balanceDescription: {
    prepaidBalanceSubAccount: 'PrepaidBalanceSubaccount',
  },

  resultCode: {
    success: '405000000',
    successZero: '0',
  },

  resultMessage: {
    success: 'Operation successfully.',
    successPlan: 'Plan purchase request accepted',
  },

  operatorId: {
    one: 351,
    two: 352,
    three: 353,
    four: 354,
    five: 355,
    six: 356,
    seven: 357,
    eight: 358,
    nine: 359,
  },

  currencyId: {
    one: 1011,
    two: 1012,
    three: 1013,
    four: 1014,
    five: 1015,
    six: 1016,
    seven: 1017,
    eight: 1018,
    nine: 1019,
  },

  channelId: {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  },

  accessMode: {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  },

  msgLanguageCode: {
    one: 2001,
    two: 2002,
    three: 2003,
    four: 2004,
    five: 2005,
    six: 2006,
    seven: 2007,
    eight: 2008,
    nine: 2009,
  },

  attribute: {
    beId: 101,
    timeType: 2,
    timeZoneID: 101,
    version: 1,
  },
};
