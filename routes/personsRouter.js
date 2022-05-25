import express from 'express';
import { query } from '../services/db.js';

const router = new express.Router();

router.get('/', async function(req, res, next) {
  try {
    const queryResult = await query('SELECT * FROM persons');
    res.json(queryResult);
  } catch (err) {
    console.error(`Error `, err.message);
    next(err);
  }
});

export default router;