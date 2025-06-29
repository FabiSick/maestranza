import express from 'express';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

const router = express.Router();

// Obtener todos los usuarios
router.get('/', async (_req, res) => {
  await db.read();
  res.json(db.data.usuarios || []);
});

// Registrar nuevo usuario
router.post('/', async (req, res) => {
  const { email, contraseña, rol } = req.body;

  if (!email || !contraseña || !rol) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  await db.read();
  db.data.usuarios ||= [];

  const existe = db.data.usuarios.some(u => u.email === email);
  if (existe) return res.status(409).json({ error: 'Usuario ya existe' });

  const usuario = { id: uuid(), email, contraseña, rol };
  db.data.usuarios.push(usuario);
  await db.write();

  res.status(201).json(usuario);
});

// Modificar usuario existente
router.put('/:id', async (req, res) => {
  const { email, contraseña, rol } = req.body;

  if (!email || !contraseña || !rol) {
    return res.status(400).json({ error: 'Faltan campos' });
  }

  await db.read();
  const index = db.data.usuarios.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });

  db.data.usuarios[index] = { id: req.params.id, email, contraseña, rol };
  await db.write();
  res.json(db.data.usuarios[index]);
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
  await db.read();
  db.data.usuarios = db.data.usuarios.filter(u => u.id !== req.params.id);
  await db.write();
  res.sendStatus(204);
});

// Login básico
router.post('/login', async (req, res) => {
  const { email, contraseña } = req.body;

  if (!email || !contraseña) {
    return res.status(400).json({ error: 'Faltan credenciales' });
  }

  await db.read();
  const usuario = db.data.usuarios.find(
    u => u.email === email && u.contraseña === contraseña
  );

  if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });

  const { contraseña: _, ...usuarioSinClave } = usuario;
  res.json(usuarioSinClave);
});

export default router;
