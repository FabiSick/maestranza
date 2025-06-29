import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAuditorPage } from './home-auditor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAuditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAuditorPageRoutingModule {}
