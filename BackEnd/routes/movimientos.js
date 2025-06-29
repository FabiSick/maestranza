import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async (req, res) => {
  await db.read();
  res.json(db.data.movimientos || []);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.movimientos ||= [];
  const nuevo = { id: uuid(), ...req.body };
  db.data.movimientos.push(nuevo);
  await db.write();
  res.status(201).json(nuevo);
});

router.put('/:id', async (req, res) => {
  await db.read();
  const index = db.data.movimientos.findIndex(m => m.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });
  db.data.movimientos[index] = { ...req.body, id: req.params.id };
  await db.write();
  res.json(db.data.movimientos[index]);
});

router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.movimientos = db.data.movimientos.filter(m => m.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
