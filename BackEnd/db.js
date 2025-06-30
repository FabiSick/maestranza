import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// Ruta al archivo JSON
const adapter = new JSONFile('./db.json');

// Define la estructura por defecto
const defaultData = {
  productos: [],
  movimientos: [],
  historialPrecios: [],
  kits: [],
  usuarios: [],
  roles: [],
  proveedores: [],
  alertas: []
};

const db = new Low(adapter, defaultData);
await db.read();

// Asegura estructura si está vacía
db.data ||= defaultData;
await db.write();

export default db;
