import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NotificacionesPopoverComponent } from 'src/app/components/notificaciones-popover/notificaciones-popover.component';

@Component({
  selector: 'app-home-proyectos',
  templateUrl: './home-proyectos.page.html',
  styleUrls: ['./home-proyectos.page.scss'],
  standalone: false,
})
export class HomeProyectosPage {
  notificaciones: any[] = [];
  private readonly apiAlertas = 'http://localhost:3000/api/alertas';

  constructor(
    private router: Router,
    private popoverCtrl: PopoverController,
    private http: HttpClient
  ) {}

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
      console.error('Error al cargar notificaciones', error);
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
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}
