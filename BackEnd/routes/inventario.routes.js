import express from 'express'
import { getInventario, crearItem, actualizarItem } from '../controllers/inventario.controller.js'

const router = express.Router()

router.get('/inventario', getInventario)
router.post('/inventario', crearItem)
router.put('/inventario/:id', actualizarItem)

export default router

await db.read();
db.data.movimientos ||= [];

db.data.movimientos.push({
  id: uuid(),
  tipo: 'entrada',
  fecha: new Date().toISOString(),
  productoId: nuevo.codigo,
  cantidad: nuevo.stock,
  usuario: 'sistema',
  motivo: 'Nuevo ingreso al inventario'
});
await db.write();
