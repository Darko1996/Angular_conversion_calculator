import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedConverterComponent} from "./shared-converter/shared-converter.component";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    SharedConverterComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    SharedConverterComponent
  ]
})
export class SharedModule { }
