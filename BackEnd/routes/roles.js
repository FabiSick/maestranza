import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async (_req, res) => {
  await db.read();
  res.json(db.data.roles || []);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.roles ||= [];
  const rol = { id: uuid(), ...req.body };
  db.data.roles.push(rol);
  await db.write();
  res.status(201).json(rol);
});

router.put('/:id', async (req, res) => {
  await db.read();
  const index = db.data.roles.findIndex(r => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });

  db.data.roles[index] = { ...req.body, id: req.params.id };
  await db.write();
  res.json(db.data.roles[index]);
});

router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.roles = db.data.roles.filter(r => r.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
