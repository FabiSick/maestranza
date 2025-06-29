import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePlantaPageRoutingModule } from './home-planta-routing.module';

import { HomePlantaPage } from './home-planta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePlantaPageRoutingModule
  ],
  declarations: [HomePlantaPage]
})
export class HomePlantaPageModule {}
