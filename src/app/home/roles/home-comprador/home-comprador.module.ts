import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCompradorPageRoutingModule } from './home-comprador-routing.module';

import { HomeCompradorPage } from './home-comprador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCompradorPageRoutingModule
  ],
  declarations: [HomeCompradorPage]
})
export class HomeCompradorPageModule {}
