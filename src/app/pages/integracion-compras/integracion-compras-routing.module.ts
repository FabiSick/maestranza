import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntegracionComprasPage } from './integracion-compras.page';

const routes: Routes = [
  {
    path: '',
    component: IntegracionComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegracionComprasPageRoutingModule {}
