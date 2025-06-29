import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notificaciones-popover',
  templateUrl: './notificaciones-popover.component.html',
  styleUrls: ['./notificaciones-popover.component.scss'],
  standalone: false,
})
export class NotificacionesPopoverComponent {
  @Input() notificaciones: any[] = [];
  @Input() onClick!: (n: any) => void;

  seleccionar(n: any) {
    if (this.onClick) this.onClick(n);
  }
}
