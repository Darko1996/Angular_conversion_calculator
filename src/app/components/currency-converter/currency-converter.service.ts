import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ConvertedCurrencies, Currencies, HistoricalRates} from "./currencies.model";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {convertToQueries} from "../../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  private readonly apiKey = '3538bcae97a24bb49b7bf3fc776f4d72';

  constructor(private http: HttpClient) { }

  getCurrencies(baseCurrency: string): Observable<Currencies> {
    const options = { params: new HttpParams() }
    options.params = convertToQueries(options.params,
      {
        api_key: this.apiKey,
        base: baseCurrency
      });
    return this.http.get<Currencies>(`${environment.apiUrl}/live`, options);
  }

  convertCurrencies(amount: number, fromCurrency: string, toCurrency: string): Observable<ConvertedCurrencies> {
    const options = { params: new HttpParams() }
    options.params = convertToQueries(options.params,
      {
        api_key: this.apiKey,
        base: fromCurrency,
        target: toCurrency,
        base_amount: amount
      });
    return this.http.get<ConvertedCurrencies>(`${environment.apiUrl}/convert`, options);
  }

  // THIS FREE API does not support multiple calls, I am getting error 429 (because of that I didn't include this feature
  getHistoricalCurrencies(amount: number, fromCurrency: string, toCurrency: string,  date: string): Observable<HistoricalRates> {
    const options = { params: new HttpParams() }
    options.params = convertToQueries(options.params,
      {
        api_key: this.apiKey,
        base: fromCurrency,
        target: toCurrency,
        date: date,
      });
    return this.http.get<HistoricalRates>(`${environment.apiUrl}/historical`, options);
  }
}
