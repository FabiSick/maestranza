import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeInventarioPage } from './home-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: HomeInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeInventarioPageRoutingModule {}
