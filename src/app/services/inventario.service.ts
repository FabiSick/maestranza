import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private apiUrl = 'http://localhost:3000/api/inventario'; // Cambia por la URL real

  constructor(private http: HttpClient) {}

  obtenerInventario(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearItem(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  actualizarItem(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
