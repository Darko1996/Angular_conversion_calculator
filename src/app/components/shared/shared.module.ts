import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexModule} from "@angular/flex-layout";
import {AngularMaterialModule} from "../../angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedConverterComponent} from "./components/shared-converter/shared-converter.component";

@NgModule({
  declarations: [
    SharedConverterComponent,
  ],
  imports: [
    CommonModule,
    FlexModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SharedConverterComponent
  ],
})
export class SharedModule { }
