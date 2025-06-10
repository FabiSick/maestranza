// database.service.ts
import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db!: SQLiteDBConnection;

  constructor(private sqliteService: SQLiteService) {}

  async initializeDatabase() {
    this.db = await this.sqliteService.createConnection(
      'inventario_maestranza',
      false,
      'no-encryption',
      1
    );

    await this.createTables();
    await this.insertInitialData(); // Now properly implemented
  }

  private async createTables() {
    const sql = `
      CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        codigo TEXT UNIQUE NOT NULL,
        categoria TEXT NOT NULL,
        stock INTEGER NOT NULL,
        stockMinimo INTEGER NOT NULL,
        unidad TEXT NOT NULL,
        ubicacion TEXT,
        proveedor TEXT,
        fechaActualizacion TEXT
      );
    `;
    await this.db.execute(sql);
  }

  // Implement the missing method
  private async insertInitialData() {
    const countResult = await this.db.query('SELECT COUNT(*) as count FROM productos');
    const count = countResult.values?.[0].count;
    
    if (count > 0) return;

    const productos: Omit<Producto, 'id'>[] = [
      // Your 50 inventory items here
      // Example:
      { 
        nombre: 'Plancha Acero A36 1/4"', 
        codigo: 'MP-AC-001', 
        categoria: 'Materia Prima', 
        stock: 150, 
        stockMinimo: 30, 
        unidad: 'kg', 
        ubicacion: 'Bodega A', 
        proveedor: 'Aceros Chile' 
      },
      // ... add all 50 items
    ];

    for (const producto of productos) {
      await this.db.run(
        `INSERT INTO productos (
          nombre, codigo, categoria, stock, 
          stockMinimo, unidad, ubicacion, proveedor, fechaActualizacion
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
        [
          producto['nombre'],
          producto['codigo'],
          producto['categoria'],
          producto['stock'],
          producto['stockMinimo'],
          producto['unidad'],
          producto['ubicacion'],
          producto['proveedor']
        ]
      );
    }
  }

  // Add other required methods
  async getProductos(): Promise<Producto[]> {
    const result = await this.db.query('SELECT * FROM productos');
    return result.values as Producto[];
  }

  async eliminarProducto(id: number): Promise<void> {
  await this.db.run('DELETE FROM productos WHERE id = ?', [id]);
}

async getProductoById(id: number): Promise<Producto | undefined> {
  const result = await this.db.query('SELECT * FROM productos WHERE id = ?', [id]);
  return result.values?.[0] as Producto | undefined;
}

async actualizarProducto(producto: Producto): Promise<void> {
  await this.db.run(
    `UPDATE productos SET 
      nombre = ?, codigo = ?, categoria = ?, stock = ?,
      stockMinimo = ?, unidad = ?, ubicacion = ?, proveedor = ?
     WHERE id = ?`,
    [
      producto.nombre, producto.codigo, producto.categoria, producto.stock,
      producto.stockMinimo, producto.unidad, producto.ubicacion, producto.proveedor,
      producto.id
    ]
  );
}
}