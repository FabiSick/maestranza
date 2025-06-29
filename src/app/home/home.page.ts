import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificacionesPopoverComponent } from 'src/app/components/notificaciones-popover/notificaciones-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  notificaciones: any[] = [];
  private readonly apiAlertas = 'http://localhost:3000/api/alertas';

  constructor(
    private popoverCtrl: PopoverController,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const usuario = localStorage.getItem('usuario');
    if (!usuario) {
      this.router.navigate(['/login']);
    }
  }

  ionViewWillEnter() {
    this.cargarNotificaciones();
  }

  async cargarNotificaciones() {
    try {
      const alertas = (await this.http.get<any[]>(this.apiAlertas).toPromise()) ?? [];

      this.notificaciones = alertas.map((a, index) => ({
        id: index,
        mensaje: `Stock crítico: ${a.nombre}`,
        tipo: 'stock',
        producto: a
      }));
    } catch (error) {
      console.error('Error al cargar alertas:', error);
    }
  }

  async mostrarPopover(ev: Event) {
    const popover = await this.popoverCtrl.create({
      component: NotificacionesPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        notificaciones: this.notificaciones,
        onClick: (n: any) => this.handleNotificacionClick(n)
      }
    });
    await popover.present();
  }

  handleNotificacionClick(notificacion: any) {
    if (notificacion.tipo === 'stock') {
      this.router.navigate(['/alertas-stock'], {
        state: { productos: [notificacion.producto] }
      });
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
