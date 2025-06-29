import express from 'express';
import db from '../db.js';
const router = express.Router();

router.get('/', async (req, res) => {
  await db.read();
  res.json(db.data.productos || []);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.productos ||= [];
  db.data.productos.push(req.body);
  await db.write();
  res.status(201).json(req.body);
});

router.put('/:id', async (req, res) => {
  await db.read();
  const index = db.data.productos.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Producto no encontrado' });

  db.data.productos[index] = req.body;
  await db.write();
  res.json(req.body);
});

router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.productos = db.data.productos.filter(p => p.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
