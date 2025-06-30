import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  standalone: false,
})
export class ReportesPage implements OnInit {
  inventario: any[] = [];
  totalProductos = 0;
  bajoStock = 0;
  categorias: Record<string, number> = {};
  private readonly apiUrl = 'http://localhost:3000/api/productos';

  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.generarReporte();
  }

  async generarReporte() {
    try {
      const productos = await this.http.get<any[]>(this.apiUrl).toPromise() ?? [];
      this.inventario = productos;
      this.totalProductos = productos.length;
      this.bajoStock = productos.filter(p => p.stock < p.stockMinimo).length;

      this.categorias = {};
      productos.forEach(p => {
        if (p.categoria) {
          this.categorias[p.categoria] = (this.categorias[p.categoria] || 0) + 1;
        }
      });
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'No se pudo generar el reporte',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  exportarJSON() {
    const blob = new Blob([JSON.stringify(this.inventario, null, 2)], {
      type: 'application/json'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'reporte_inventario.json';
    link.click();
  }

  exportarPDF() {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Reporte de Inventario', 14, 15);

    if (this.inventario.length === 0) {
      doc.text('No hay datos de inventario disponibles.', 14, 30);
      doc.save('reporte_inventario.pdf');
      return;
    }

    const headers = Object.keys(this.inventario[0]);
    const rows = this.inventario.map(item => headers.map(h => item[h]));

    autoTable(doc, {
      head: [headers],
      body: rows,
      startY: 25,
      styles: { fontSize: 9 },
      headStyles: {
        fillColor: [255, 205, 0], // Caterpillar Yellow
        textColor: 0,
      },
    });

    doc.save('reporte_inventario.pdf');
  }
}
