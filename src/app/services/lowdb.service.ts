import { Injectable } from '@angular/core';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'; // ✅ CORRECTO PARA VERSIONES 3+
import { join } from 'path';

type InventarioItem = {
  id: string;
  nombre: string;
  cantidad: number;
};

type Data = {
  inventario: InventarioItem[];
};

@Injectable({
  providedIn: 'root',
})
export class LowdbService {
  private db: Low<Data>;

  constructor() {
    const file = new JSONFile<Data>(join(__dirname, 'assets/data.json'));
    this.db = new Low<Data>(file, { inventario: [] });
    this.init();
  }

  async init() {
    await this.db.read();
    this.db.data ||= { inventario: [] };
    await this.db.write();
  }

  async getInventario(): Promise<InventarioItem[]> {
    await this.db.read();
    return this.db.data!.inventario;
  }

  async addItem(item: InventarioItem): Promise<void> {
    this.db.data!.inventario.push(item);
    await this.db.write();
  }

  async updateItem(id: string, data: Partial<InventarioItem>): Promise<void> {
    const index = this.db.data!.inventario.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.db.data!.inventario[index] = {
        ...this.db.data!.inventario[index],
        ...data,
      };
      await this.db.write();
    }
  }
}
