import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home-inventario',
    loadChildren: () => import('./roles/home-inventario/home-inventario.module').then( m => m.HomeInventarioPageModule)
  },
  {
    path: 'home-comprador',
    loadChildren: () => import('./roles/home-comprador/home-comprador.module').then( m => m.HomeCompradorPageModule)
  },
  {
    path: 'home-almacen',
    loadChildren: () => import('./roles/home-almacen/home-almacen.module').then( m => m.HomeAlmacenPageModule)
  },
  {
    path: 'home-produccion',
    loadChildren: () => import('./roles/home-produccion/home-produccion.module').then( m => m.HomeProduccionPageModule)
  },
  {
    path: 'home-auditor',
    loadChildren: () => import('./roles/home-auditor/home-auditor.module').then( m => m.HomeAuditorPageModule)
  },
  {
    path: 'home-proyectos',
    loadChildren: () => import('./roles/home-proyectos/home-proyectos.module').then( m => m.HomeProyectosPageModule)
  },
  {
    path: 'home-planta',
    loadChildren: () => import('./roles/home-planta/home-planta.module').then( m => m.HomePlantaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
