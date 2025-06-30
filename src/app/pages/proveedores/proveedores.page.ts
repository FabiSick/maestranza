// src/app/pages/proveedores/proveedores.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
  standalone: false
})
export class ProveedoresPage implements OnInit {
  apiUrl = 'http://localhost:3000/api/proveedores';
  proveedores: any[] = [];

  nuevoProveedor = {
    nombre: '',
    contacto: '',
    telefono: '',
    correo: '',
    condicionesPago: ''
  };

  editando: any = null;

  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this.obtenerProveedores();
  }

  async obtenerProveedores() {
    try {
      this.proveedores = await this.http.get<any[]>(this.apiUrl).toPromise() ?? [];
    } catch (error) {
      console.error('Error al obtener proveedores:', error);
    }
  }

  async guardar() {
    try {
      if (this.editando) {
        await this.http.put(`${this.apiUrl}/${this.editando.id}`, this.nuevoProveedor).toPromise();
      } else {
        await this.http.post(this.apiUrl, this.nuevoProveedor).toPromise();
      }
      this.nuevoProveedor = { nombre: '', contacto: '', telefono: '', correo: '', condicionesPago: '' };
      this.editando = null;
      this.obtenerProveedores();
    } catch (error) {
      console.error('Error al guardar proveedor:', error);
    }
  }

  editar(proveedor: any) {
    this.nuevoProveedor = { ...proveedor };
    this.editando = proveedor;
  }

  async eliminar(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Deseas eliminar este proveedor?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.http.delete(`${this.apiUrl}/${id}`).toPromise();
            this.obtenerProveedores();
          }
        }
      ]
    });
    await alert.present();
  }

  cancelarEdicion() {
    this.editando = null;
    this.nuevoProveedor = { nombre: '', contacto: '', telefono: '', correo: '', condicionesPago: '' };
  }
}
