import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegracionComprasPageRoutingModule } from './integracion-compras-routing.module';

import { IntegracionComprasPage } from './integracion-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegracionComprasPageRoutingModule
  ],
  declarations: [IntegracionComprasPage]
})
export class IntegracionComprasPageModule {}
