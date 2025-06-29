import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProduccionPageRoutingModule } from './home-produccion-routing.module';

import { HomeProduccionPage } from './home-produccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProduccionPageRoutingModule
  ],
  declarations: [HomeProduccionPage]
})
export class HomeProduccionPageModule {}
