import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async (req, res) => {
  await db.read();
  res.json(db.data.historialPrecios || []);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.historialPrecios ||= [];
  const nuevo = { id: uuid(), ...req.body };
  db.data.historialPrecios.push(nuevo);
  await db.write();
  res.status(201).json(nuevo);
});

router.put('/:id', async (req, res) => {
  await db.read();
  const index = db.data.historialPrecios.findIndex(h => h.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });
  db.data.historialPrecios[index] = { ...req.body, id: req.params.id };
  await db.write();
  res.json(db.data.historialPrecios[index]);
});

router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.historialPrecios = db.data.historialPrecios.filter(h => h.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
