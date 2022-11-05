import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyConverterComponent} from "./currency-converter.component";
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "../../app.module";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [{ path: '', component: CurrencyConverterComponent }];

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CurrencyConverterModule { }
