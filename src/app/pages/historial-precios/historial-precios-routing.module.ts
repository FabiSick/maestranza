import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPreciosPage } from './historial-precios.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPreciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPreciosPageRoutingModule {}
