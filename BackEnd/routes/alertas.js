import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async (_req, res) => {
  await db.read();
  res.json(db.data.alertas || []);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.alertas ||= [];
  const nueva = { id: uuid(), ...req.body };
  db.data.alertas.push(nueva);
  await db.write();
  res.status(201).json(nueva);
});

router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.alertas = db.data.alertas.filter(a => a.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
