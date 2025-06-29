import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./pages/proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
  },
  {
    path: 'etiquetado',
    loadChildren: () => import('./pages/etiquetado/etiquetado.module').then( m => m.EtiquetadoPageModule)
  },
  {
    path: 'integracion-compras',
    loadChildren: () => import('./pages/integracion-compras/integracion-compras.module').then( m => m.IntegracionComprasPageModule)
  },
  {
    path: 'alertas-stock',
    loadChildren: () => import('./pages/alertas-stock/alertas-stock.module').then( m => m.AlertasStockPageModule)
  },
  {
    path: 'lotes-vencimiento',
    loadChildren: () => import('./pages/lotes-vencimiento/lotes-vencimiento.module').then( m => m.LotesVencimientoPageModule)
  },
  {
    path: 'registro-inventario',
    loadChildren: () => import('./pages/registro-inventario/registro-inventario.module').then( m => m.RegistroInventarioPageModule)
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./pages/movimientos/movimientos.module').then( m => m.MovimientosPageModule)
  },
  {
    path: 'kits',
    loadChildren: () => import('./pages/kits/kits.module').then( m => m.KitsPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'historial-precios',
    loadChildren: () => import('./pages/historial-precios/historial-precios.module').then( m => m.HistorialPreciosPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
	{
	path: 'home-inventario',
	loadChildren: () => import('./home/roles/home-inventario/home-inventario.module').then(m => m.HomeInventarioPageModule)
	},
	{
	path: 'home-comprador',
	loadChildren: () => import('./home/roles/home-comprador/home-comprador.module').then(m => m.HomeCompradorPageModule)
	},
	{
	path: 'home-almacen',
	loadChildren: () => import('./home/roles/home-almacen/home-almacen.module').then(m => m.HomeAlmacenPageModule)
	},
	{
	path: 'home-produccion',
	loadChildren: () => import('./home/roles/home-produccion/home-produccion.module').then(m => m.HomeProduccionPageModule)
	},
	{
	path: 'home-auditor',
	loadChildren: () => import('./home/roles/home-auditor/home-auditor.module').then(m => m.HomeAuditorPageModule)
	},
	{
	path: 'home-proyectos',
	loadChildren: () => import('./home/roles/home-proyectos/home-proyectos.module').then(m => m.HomeProyectosPageModule)
	},
	{
	path: 'home-planta',
	loadChildren: () => import('./home/roles/home-planta/home-planta.module').then(m => m.HomePlantaPageModule)
	}

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
