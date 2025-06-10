import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotesVencimientoPageRoutingModule } from './lotes-vencimiento-routing.module';

import { LotesVencimientoPage } from './lotes-vencimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotesVencimientoPageRoutingModule
  ],
  declarations: [LotesVencimientoPage]
})
export class LotesVencimientoPageModule {}
