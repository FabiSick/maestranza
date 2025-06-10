import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotesVencimientoPage } from './lotes-vencimiento.page';

const routes: Routes = [
  {
    path: '',
    component: LotesVencimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotesVencimientoPageRoutingModule {}
