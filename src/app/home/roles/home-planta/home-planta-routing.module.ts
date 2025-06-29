import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePlantaPage } from './home-planta.page';

const routes: Routes = [
  {
    path: '',
    component: HomePlantaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePlantaPageRoutingModule {}
