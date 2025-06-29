import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProduccionPage } from './home-produccion.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProduccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProduccionPageRoutingModule {}
