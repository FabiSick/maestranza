import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroInventarioPage } from './registro-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroInventarioPageRoutingModule {}
