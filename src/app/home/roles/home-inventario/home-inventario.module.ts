import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeInventarioPageRoutingModule } from './home-inventario-routing.module';

import { HomeInventarioPage } from './home-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeInventarioPageRoutingModule
  ],
  declarations: [HomeInventarioPage]
})
export class HomeInventarioPageModule {}
