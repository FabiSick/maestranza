import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

router.get('/', async (_req, res) => {
  await db.read();
  db.data.movimientos ||= [];
  res.json(db.data.movimientos);
});

router.post('/', async (req, res) => {
  await db.read();
  db.data.movimientos ||= [];
  const movimiento = { id: uuid(), fecha: new Date().toISOString(), ...req.body };
  db.data.movimientos.push(movimiento);
  await db.write();
  res.status(201).json(movimiento);
});

export default router;
