import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'currency-converter',
    loadChildren: async () => (await import('./components/currency-converter/currency-converter.module')).CurrencyConverterModule,
  },
  {
    path: 'unit-converter',
    loadChildren: async () => (await import('./components/unit-converter/unit-converter.module')).UnitConverterModule,
  },
  { path: '**', redirectTo: 'currency-converter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
