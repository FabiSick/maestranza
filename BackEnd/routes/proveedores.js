import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async (_req, res) => {
  await db.read();
  res.json(db.data.proveedores || []);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.proveedores ||= [];
  const proveedor = { id: uuid(), ...req.body };
  db.data.proveedores.push(proveedor);
  await db.write();
  res.status(201).json(proveedor);
});

router.put('/:id', async (req, res) => {
  await db.read();
  const index = db.data.proveedores.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });

  db.data.proveedores[index] = { ...req.body, id: req.params.id };
  await db.write();
  res.json(db.data.proveedores[index]);
});

router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.proveedores = db.data.proveedores.filter(p => p.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
