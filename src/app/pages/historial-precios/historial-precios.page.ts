import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Producto {
  id?: string;
  nombre: string;
  precio: number;
}

interface Historial {
  id: string;
  nombre: string;
  precio: number;
  cambio: 'subió' | 'bajó' | 'sin cambio';
}

@Component({
  selector: 'app-historial-precios',
  templateUrl: './historial-precios.page.html',
  styleUrls: ['./historial-precios.page.scss'],
  standalone: false
})
export class HistorialPreciosPage implements OnInit {
  historialPrecios: Historial[] = [];
  private readonly apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const productos = (await this.http.get<Producto[]>(this.apiUrl).toPromise()) ?? [];
    const prevPrecios = JSON.parse(localStorage.getItem('precios-previos') || '{}');

    this.historialPrecios = productos.map(p => {
      const prev = prevPrecios[p.id!] ?? p.precio;
      let cambio: Historial['cambio'] = 'sin cambio';
      if (p.precio > prev) cambio = 'subió';
      else if (p.precio < prev) cambio = 'bajó';

      prevPrecios[p.id!] = p.precio;

      return {
        id: p.id!,
        nombre: p.nombre,
        precio: p.precio,
        cambio
      };
    });

    localStorage.setItem('precios-previos', JSON.stringify(prevPrecios));
  }
}
