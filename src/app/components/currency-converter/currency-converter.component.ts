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
              private changeDetectorRef: ChangeDetectorRef) {
  }

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
    this.currencyConverterService.getCurrencies('EUR').subscribe((response: Currencies) => {
      this.currencies = Object.keys(response.exchange_rates);
      this.currencies.push('EUR');
      this.changeDetectorRef.detectChanges();
    })
  }

  getCurrencyRates(data: Convert): void {
    this.currencyConverterService.convertCurrencies(data.amount, data.fromField, data.toField).subscribe((response: ConvertedCurrencies) => {
      this.convertedResults = response;
      this.changeDetectorRef.detectChanges();
    })
  }
}
