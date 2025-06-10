import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertasStockPageRoutingModule } from './alertas-stock-routing.module';

import { AlertasStockPage } from './alertas-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertasStockPageRoutingModule
  ],
  declarations: [AlertasStockPage]
})
export class AlertasStockPageModule {}
