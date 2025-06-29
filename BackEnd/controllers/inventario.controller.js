import db from '../db/db.js'
import { v4 as uuidv4 } from 'uuid'

export const getInventario = async (req, res) => {
  await db.read()
  res.json(db.data.inventario)
}

export const crearItem = async (req, res) => {
  const nuevoItem = { id: uuidv4(), ...req.body }
  db.data.inventario.push(nuevoItem)
  await db.write()
  res.json(nuevoItem)
}

export const actualizarItem = async (req, res) => {
  const { id } = req.params
  const index = db.data.inventario.findIndex(i => i.id === id)
  if (index !== -1) {
    db.data.inventario[index] = { ...db.data.inventario[index], ...req.body }
    await db.write()
    res.json(db.data.inventario[index])
  } else {
    res.status(404).json({ error: 'No encontrado' })
  }
}
