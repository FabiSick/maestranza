import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPreciosPageRoutingModule } from './historial-precios-routing.module';

import { HistorialPreciosPage } from './historial-precios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPreciosPageRoutingModule
  ],
  declarations: [HistorialPreciosPage]
})
export class HistorialPreciosPageModule {}
