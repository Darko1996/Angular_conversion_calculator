import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyConverterComponent} from "./currency-converter.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FlexModule} from "@angular/flex-layout";

const routes: Routes = [{ path: '', component: CurrencyConverterComponent }];

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexModule
  ]
})
export class CurrencyConverterModule { }
