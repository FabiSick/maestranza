import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAlmacenPageRoutingModule } from './home-almacen-routing.module';

import { HomeAlmacenPage } from './home-almacen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAlmacenPageRoutingModule
  ],
  declarations: [HomeAlmacenPage]
})
export class HomeAlmacenPageModule {}
