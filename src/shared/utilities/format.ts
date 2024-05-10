import moment from 'moment';

export const Format = {
  number: (val: number, decimals: number = 2, shorten: boolean = false) => {
    var formatted: any = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }).format(val);

    if (shorten) {
      if (val < 1e3) {
        formatted = val;
      }
      if (val >= 1e3) {
        formatted = +(val / 1e3).toFixed(1) + 'K';
      }
    }

    return formatted;
  },
  currency: (
    val: number,
    currency: string = 'PHP',
    decimals: number = 2,
    shorten: boolean = false
  ) => {
    var formatted: any = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
      style: 'currency',
      currencyDisplay: 'narrowSymbol',
      currency,
    }).format(val);

    if (shorten) {
      if (val < 1e3) {
        formatted = val;
      }
      if (val >= 1e3) {
        formatted = +(val / 1e3).toFixed(1) + 'K';
      }
    }

    return formatted;
  },
  date: (date: string | Date, format: string) => {
    let formatted: string = moment(date).format(format);

    return formatted;
  },
};
