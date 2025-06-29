import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async (_req, res) => {
  await db.read();
  res.json(db.data.lotes || []);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.lotes ||= [];
  const lote = { id: uuid(), ...req.body };
  db.data.lotes.push(lote);
  await db.write();
  res.status(201).json(lote);
});

router.put('/:id', async (req, res) => {
  await db.read();
  const index = db.data.lotes.findIndex(l => l.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });

  db.data.lotes[index] = { ...req.body, id: req.params.id };
  await db.write();
  res.json(db.data.lotes[index]);
});

router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.lotes = db.data.lotes.filter(l => l.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
