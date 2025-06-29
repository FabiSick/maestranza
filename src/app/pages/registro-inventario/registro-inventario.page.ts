import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Producto {
  id?: number;
  nombre: string;
  codigo: string;
  ubicacion: string;
  categoria: string;
  descripcion?: string;
  stock?: number;
  stockMinimo?: number;
  cantidad?: number;
  unidad?: string;
  precio?: number;
}

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.page.html',
  styleUrls: ['./registro-inventario.page.scss'],
  standalone: false,
})
export class RegistroInventarioPage implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  alertas: Producto[] = [];
  filtro: string = '';
  categoriaFiltro: string = '';
  private readonly apiUrl = 'http://localhost:3000/api/productos';
  private readonly apiAlertas = 'http://localhost:3000/api/alertas';

  constructor(
    private http: HttpClient,
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
      const data = await this.http.get<Producto[]>(this.apiUrl).toPromise();
      this.productos = data ?? [];
      this.filtrarProductos();
      this.verificarStockBajo(); // ✅ analizar stock después de cargar
    } catch (error) {
      console.error('Error al cargar productos:', error);
      this.mostrarAlerta('Error', 'No se pudo cargar el inventario');
    } finally {
      await loading.dismiss();
    }
  }

  filtrarProductos() {
    const texto = this.filtro.trim().toLowerCase();
    const categoria = this.categoriaFiltro.trim().toLowerCase();

    this.productosFiltrados = this.productos.filter(producto => {
      const coincideTexto =
        producto.nombre?.toLowerCase().includes(texto) ||
        producto.codigo?.toLowerCase().includes(texto) ||
        producto.ubicacion?.toLowerCase().includes(texto);

      const coincideCategoria =
        !categoria || producto.categoria?.toLowerCase() === categoria;

      return coincideTexto && coincideCategoria;
    });
  }

  verificarStockBajo() {
    this.alertas = this.productos.filter(p =>
      p.cantidad !== undefined &&
      p.stockMinimo !== undefined &&
      p.cantidad < p.stockMinimo
    );

    if (this.alertas.length > 0) {
      this.enviarAlertas();
    }
  }

  async enviarAlertas() {
    try {
      await this.http.post(this.apiAlertas, this.alertas).toPromise();
      console.log('✔ Alertas enviadas al backend:', this.alertas.length);
    } catch (error) {
      console.error('Error al enviar alertas:', error);
    }
  }

  verAlertasStock() {
    if (this.alertas.length > 0) {
      this.router.navigate(['/alertas-stock'], {
        state: { productos: this.alertas }
      });
    } else {
      this.mostrarAlerta('Sin alertas', 'No hay productos con stock bajo.');
    }
  }

  async actualizarInventario() {
    await this.cargarProductos();
  }

  async eliminarProducto(index: number, slidingItem?: IonItemSliding) {
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
              await this.http.delete(`${this.apiUrl}/${index}`).toPromise();
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

  editarProducto(producto: Producto, index: number, slidingItem?: IonItemSliding) {
    if (slidingItem) slidingItem.close();
    this.router.navigate(['/editar-producto', index]);
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
