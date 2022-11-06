import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SharedConverterService} from "../shared/components/shared-converter/shared-converter.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ConvertedCurrencies, Currencies} from "./currencies.model";
import {Convert} from "../shared/components/shared-converter/shared-converter.model";
import {CurrencyConverterService} from "./currency-converter.service";
import {slideIn} from "../../animations/animations";

@UntilDestroy()
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  animations: [slideIn],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent implements OnInit {
  currencies: string[];
  convertedResults: ConvertedCurrencies;

  constructor(private sharedConvertedService: SharedConverterService,
              private currencyConverterService: CurrencyConverterService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.converterListener();
    this.getCurrencies();
  }

  converterListener(): void {
    this.sharedConvertedService.actionObservable$.pipe(
      untilDestroyed(this),
    ).subscribe((action: Convert) => {
      this.getCurrencyRates(action);
    });
  }

  getCurrencies(): void {
    const currMock = {
      "EUR": 1.012966,
      "JPY": 147.072528,
      "BGN": 1.981159,
      "CZK": 24.738655,
      "DKK": 7.538391,
      "GBP": 0.886122,
      "HUF": 406.351297,
      "PLN": 4.743213,
      "RON": 4.952694,
      "SEK": 10.99453,
      "CHF": 0.999088,
      "ISK": 147.386548,
      "NOK": 10.334177,
      "HRK": 7.633002,
      "RUB": 104.99999999999999,
      "TRY": 18.622873,
      "AUD": 1.550952,
      "BRL": 5.032618,
      "CAD": 1.352411,
      "CNY": 7.181321,
      "HKD": 7.849777,
      "IDR": 15692.676256,
      "ILS": 3.551965,
      "INR": 82.070502,
      "KRW": 1415.822528,
      "MXN": 19.510839,
      "MYR": 4.747974,
      "NZD": 1.698643,
      "PHP": 58.419773,
      "SGD": 1.407111,
      "THB": 37.384522,
      "ZAR": 18.029072,
      "ARS": 75.269373,
      "DZD": 124.445887,
      "MAD": 8.83269,
      "TWD": 27.466513,
      "BTC": 0.000052,
      "ETH": 0.000764,
      "BNB": 0.003633,
      "DOGE": 16.654888,
      "XRP": 2.07083,
      "BCH": 0.008601,
      "LTC": 0.018906
    }
    this.currencies = Object.keys(currMock);
    this.changeDetectorRef.detectChanges();

    // this.currencyConverterService.getCurrencies('EUR').subscribe((response: Currencies) => {
    //   this.currencies = Object.keys(response.exchange_rates);
    //   this.currencies.push('EUR');
    //   this.changeDetectorRef.detectChanges();
    // })
  }

  getCurrencyRates(data: Convert): void {
    this.convertedResults = {
      "base": "EUR",
      "target": "GBP",
      "base_amount": 1,
      "converted_amount": 0.87478,
      "exchange_rate": 0.87478,
      "last_updated": 1667654100
    };
    this.changeDetectorRef.detectChanges();

    // this.currencyConverterService.convertCurrencies(data.amount, data.fromField, data.toField).subscribe((response: ConvertedCurrencies) => {
    //   this.convertedResults = response;
    //   this.changeDetectorRef.detectChanges();
    // })
  }
}
