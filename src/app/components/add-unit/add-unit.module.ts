import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddUnitComponent} from "./add-unit.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FlexModule} from "@angular/flex-layout";
import {AngularMaterialModule} from "../../angular-material.module";
import {FormsModule} from "@angular/forms";

const routes: Routes = [{ path: '', component: AddUnitComponent }];

@NgModule({
  declarations: [AddUnitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class AddUnitModule { }
