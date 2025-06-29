import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCompradorPage } from './home-comprador.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCompradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCompradorPageRoutingModule {}
