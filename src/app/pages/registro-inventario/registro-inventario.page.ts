import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { Producto } from '../../models/producto.model';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.page.html',
  styleUrls: ['./registro-inventario.page.scss'],
  standalone: false,

})
export class RegistroInventarioPage implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  filtro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private database: DatabaseService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    await this.cargarProductos();
  }

  async cargarProductos() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando inventario...'
    });
    await loading.present();

    try {
      this.productos = await this.database.getProductos();
      this.filtrarProductos();
    } catch (error) {
      console.error('Error al cargar productos:', error);
      this.mostrarAlerta('Error', 'No se pudo cargar el inventario');
    } finally {
      await loading.dismiss();
    }
  }

  filtrarProductos() {
    this.productosFiltrados = this.productos.filter(producto => {
      const coincideTexto = 
        producto.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        producto.codigo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        producto.ubicacion.toLowerCase().includes(this.filtro.toLowerCase());
      
      const coincideCategoria = 
        !this.categoriaFiltro || 
        producto.categoria === this.categoriaFiltro;
      
      return coincideTexto && coincideCategoria;
    });
  }

  async actualizarInventario() {
    await this.cargarProductos();
  }

  async eliminarProducto(id: number, slidingItem?: IonItemSliding) {
  if (slidingItem) await slidingItem.close();
  
  const alert = await this.alertCtrl.create({
    header: 'Confirmar',
    message: '¿Estás seguro de eliminar este producto?',
    buttons: [
      { text: 'Cancelar', role: 'cancel' },
      {
        text: 'Eliminar',
        handler: async () => {
          try {
            await this.database.eliminarProducto(id);
            await this.cargarProductos();
          } catch (error) {
            console.error('Error al eliminar:', error);
            this.mostrarAlerta('Error', 'No se pudo eliminar el producto');
          }
        }
      }
    ]
  });
  
  await alert.present();
  }

  agregarProducto() {
    this.router.navigate(['/editar-producto', 'nuevo']);
  }

  editarProducto(producto: Producto, slidingItem?: IonItemSliding) {
    if (slidingItem) slidingItem.close();
    this.router.navigate(['/editar-producto', producto.id]);
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}