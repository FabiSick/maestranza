import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertasStockPage } from './alertas-stock.page';

const routes: Routes = [
  {
    path: '',
    component: AlertasStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertasStockPageRoutingModule {}
