import express from 'express'
import { getInventario, crearItem, actualizarItem } from '../controllers/inventario.controller.js'

const router = express.Router()

router.get('/inventario', getInventario)
router.post('/inventario', crearItem)
router.put('/inventario/:id', actualizarItem)

export default router
