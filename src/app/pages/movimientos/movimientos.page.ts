import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Movimiento {
  id: string;
  tipo: 'entrada' | 'salida' | 'transferencia' | 'ajuste';
  productoId: string;
  cantidad: number;
  motivo: string;
  usuario: string;
  fecha: string;
}

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
  standalone: false
})
export class MovimientosPage implements OnInit {
  movimientos: Movimiento[] = [];
  private readonly apiUrl = 'http://localhost:3000/api/movimientos';

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.cargarMovimientos();
  }

  async cargarMovimientos() {
    try {
      const data = await this.http.get<Movimiento[]>(this.apiUrl).toPromise();
      this.movimientos = data ?? [];
    } catch (error) {
      console.error('Error al cargar movimientos:', error);
    }
  }
}
