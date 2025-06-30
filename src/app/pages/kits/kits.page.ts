// src/app/pages/kits/kits.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.page.html',
  styleUrls: ['./kits.page.scss'],
  standalone: false
})
export class KitsPage implements OnInit {
  kits: any[] = [];
  nuevoKit = {
    nombre: '',
    piezas: ''
  };
  private readonly apiUrl = 'http://localhost:3000/api/kits';

  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.cargarKits();
  }

  async cargarKits() {
    try {
      this.kits = await this.http.get<any[]>(this.apiUrl).toPromise() ?? [];
    } catch (err) {
      console.error('Error al cargar kits', err);
    }
  }

  async agregarKit() {
    if (!this.nuevoKit.nombre || !this.nuevoKit.piezas) return;

    try {
      const piezasArray = this.nuevoKit.piezas.split(',').map(p => p.trim());
      const creado = await this.http.post<any>(this.apiUrl, {
        nombre: this.nuevoKit.nombre,
        piezas: piezasArray
      }).toPromise();

      this.kits.push(creado);
      this.nuevoKit = { nombre: '', piezas: '' };
    } catch (err) {
      console.error('Error al crear kit', err);
    }
  }

  async eliminarKit(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Eliminar este kit?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.http.delete(`${this.apiUrl}/${id}`).toPromise();
            this.kits = this.kits.filter(k => k.id !== id);
          }
        }
      ]
    });

    await alert.present();
  }
}
