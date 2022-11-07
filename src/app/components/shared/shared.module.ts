import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexModule} from "@angular/flex-layout";
import {AngularMaterialModule} from "../../angular-material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedConverterComponent} from "./components/shared-converter/shared-converter.component";
import {MatTableModule} from "@angular/material/table";

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
        MatTableModule,
    ],
  exports: [
    SharedConverterComponent
  ],
})
export class SharedModule { }
