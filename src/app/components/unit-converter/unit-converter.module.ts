import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnitConverterComponent} from "./unit-converter.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [{ path: '', component: UnitConverterComponent }];

@NgModule({
  declarations: [UnitConverterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UnitConverterModule { }
