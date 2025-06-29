import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Producto {
  nombre: string;
  codigo: string;
  ubicacion: string;
  categoria: string;
  cantidad?: number;
  stockMinimo?: number;
  unidad?: string;
}

@Component({
  selector: 'app-alertas-stock',
  templateUrl: './alertas-stock.page.html',
  styleUrls: ['./alertas-stock.page.scss'],
  standalone: false,
})
export class AlertasStockPage implements OnInit {
  alertas: Producto[] = [];
  private readonly apiAlertas = 'http://localhost:3000/api/alertas';

  constructor(private router: Router, private http: HttpClient) {}

  async ngOnInit() {
    const desdeNavegacion = history.state['productos'];

    if (Array.isArray(desdeNavegacion) && desdeNavegacion.length > 0) {
      this.alertas = desdeNavegacion;
    } else {
      await this.cargarDesdeServidor();
    }
  }

  async cargarDesdeServidor() {
    try {
      const data = await this.http.get<Producto[]>(this.apiAlertas).toPromise();
      this.alertas = data ?? [];
    } catch (error) {
      console.error('Error al obtener alertas:', error);
    }
  }
}
