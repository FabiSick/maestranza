export interface Producto {
  id: number; // Optional for new items
  nombre: string;
  codigo: string;
  categoria: 'Materia Prima' | 'Herramientas' | 'Repuestos' | 'Producto Terminado';
  stock: number;
  stockMinimo: number;
  unidad: 'kg' | 'unidades' | 'metros' | 'litros' | 'pares' | 'juegos';
  ubicacion: string;
  proveedor: string;
  fechaActualizacion?: string;
}