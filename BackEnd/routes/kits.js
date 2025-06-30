// routes/kits.js
import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

// GET: Obtener todos los kits
router.get('/', async (_req, res) => {
  await db.read();
  db.data.kits ||= [];
  res.json(db.data.kits);
});

// POST: Crear un nuevo kit
router.post('/', async (req, res) => {
  await db.read();
  db.data.kits ||= [];
  const nuevoKit = { id: uuid(), ...req.body };
  db.data.kits.push(nuevoKit);
  await db.write();
  res.status(201).json(nuevoKit);
});

// PUT: Actualizar un kit por ID
router.put('/:id', async (req, res) => {
  await db.read();
  db.data.kits ||= [];
  const index = db.data.kits.findIndex(k => k.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Kit no encontrado' });

  db.data.kits[index] = { ...req.body, id: req.params.id };
  await db.write();
  res.json(db.data.kits[index]);
});

// DELETE: Eliminar un kit por ID
router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.kits ||= [];
  db.data.kits = db.data.kits.filter(k => k.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

export default router;
