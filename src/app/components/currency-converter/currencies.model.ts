export class Currencies {
  base: string;
  last_updated: number;
  exchange_rates: ExchangeRates;
}

export class ExchangeRates {
  EUR: number;
  JPY: number;
  BGN: number;
  CZK: number;
  DKK: number;
  GBP: number;
  HUF: number;
  PLN: number;
  RON: number;
  SEK: number;
  CHF: number;
  ISK: number;
  NOK: number;
  HRK: number;
  RUB: number;
  TRY: number;
  AUD: number;
  BRL: number;
  CAD: number;
  CNY: number;
  HKD: number;
  IDR: number;
  ILS: number;
  INR: number;
  KRW: number;
  MXN: number;
  MYR: number;
  NZD: number;
  PHP: number;
  SGD: number;
  THB: number;
  ZAR: number;
  ARS: number;
  DZD: number;
  MAD: number;
  TWD: number;
  BTC: number;
  ETH: number;
  BNB: number;
  DOGE: number;
  XRP: number;
  BCH: number;
  LTC: number;
}

export class ConvertedCurrencies {
  base: string;
  target: string;
  base_amount: number;
  converted_amount: number;
  exchange_rate: number;
  last_updated: number;
}
