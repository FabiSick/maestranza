import express from 'express';
import cors from 'cors';
import db from './db.js';

// Rutas por entidad
import productosRoutes from './routes/productos.js';
import movimientosRoutes from './routes/movimientos.js';
import historialPreciosRoutes from './routes/historial-precios.js';
import kitsRoutes from './routes/kits.js';
import usuariosRoutes from './routes/usuarios.js';
import rolesRoutes from './routes/roles.js';
import proveedoresRoutes from './routes/proveedores.js';
import alertasRoutes from './routes/alertas.js'; // Notificaciones de stock bajo

const app = express();
const PORT = 3000;

import kitsRouter from './routes/kits.js';
app.use('/api/kits', kitsRouter);
app.use(cors());
app.use(express.json());

// Asegura estructura inicial mínima
await db.read();
db.data ||= {
  productos: [],
  movimientos: [],
  historialPrecios: [],
  kits: [],
  usuarios: [],
  roles: [],
  proveedores: [],
  alertas: []
};
await db.write();

// Asocia cada ruta a su endpoint
app.use('/api/productos', productosRoutes);
app.use('/api/movimientos', movimientosRoutes);
app.use('/api/historial-precios', historialPreciosRoutes);
app.use('/api/kits', kitsRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/alertas', alertasRoutes);

app.listen(PORT, () =>
  console.log(`✔ API LowDB funcionando en http://localhost:${PORT}`)
);

