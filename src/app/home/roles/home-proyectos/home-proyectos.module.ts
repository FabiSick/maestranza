import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProyectosPageRoutingModule } from './home-proyectos-routing.module';

import { HomeProyectosPage } from './home-proyectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProyectosPageRoutingModule
  ],
  declarations: [HomeProyectosPage]
})
export class HomeProyectosPageModule {}
