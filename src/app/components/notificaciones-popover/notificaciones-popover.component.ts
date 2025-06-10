import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificaciones-popover',
  templateUrl: './notificaciones-popover.component.html',
  styleUrls: ['./notificaciones-popover.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class NotificacionesPopoverComponent {
  @Input() notificaciones: any[] = [];
}
