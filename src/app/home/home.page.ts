import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificacionesPopoverComponent } from 'src/app/components/notificaciones-popover/notificaciones-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  notificaciones = [
    { id: 1, mensaje: 'Stock crítico en Rodamiento 230', tipo: 'stock' },
    { id: 2, mensaje: 'Lubricante ABC vence en 3 días', tipo: 'vencimiento' },
  ];

  constructor(private popoverCtrl: PopoverController) {}

  async mostrarPopover(ev: Event) {
    const popover = await this.popoverCtrl.create({
      component: NotificacionesPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        notificaciones: this.notificaciones
      }
    });
    await popover.present();
  }
}
