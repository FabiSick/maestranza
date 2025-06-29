import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAuditorPageRoutingModule } from './home-auditor-routing.module';

import { HomeAuditorPage } from './home-auditor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAuditorPageRoutingModule
  ],
  declarations: [HomeAuditorPage]
})
export class HomeAuditorPageModule {}
