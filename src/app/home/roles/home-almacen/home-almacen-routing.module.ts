import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAlmacenPage } from './home-almacen.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAlmacenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAlmacenPageRoutingModule {}
