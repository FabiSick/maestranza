import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProyectosPage } from './home-proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProyectosPageRoutingModule {}
