// src/app/services/inventario.service.ts
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

// ✅ Definición del tipo Movimiento
interface Movimiento {
  id?: number;
  productoId: number;
  tipo: 'entrada' | 'salida';
  cantidad: number;
  fecha: string;
  motivo?: string;
}

@Injectable({ providedIn: 'root' })
export class InventarioService {
  private apiUrl = 'http://localhost:3000/api/inventario'

  constructor(private http: HttpClient) {}

  obtenerInventario(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  crearItem(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data)
  }

  actualizarItem(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data)
  }

  registrarMovimiento(movimiento: Movimiento) {
    return this.http.post(`${this.apiUrl}/movimientos`, movimiento);
  }

  obtenerMovimientos() {
    return this.http.get<Movimiento[]>(`${this.apiUrl}/movimientos`);
  }
}
