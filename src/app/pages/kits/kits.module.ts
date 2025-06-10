import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitsPageRoutingModule } from './kits-routing.module';

import { KitsPage } from './kits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitsPageRoutingModule
  ],
  declarations: [KitsPage]
})
export class KitsPageModule {}
