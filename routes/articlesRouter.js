import express from 'express';
import { query } from '../services/db.js';

const router = new express.Router();

router.get('/getArticlesByPersonId', async function(req, res, next) {
  try {
    const queryResult = await query('SELECT * FROM articles WHERE person_id = ?', [req.query.personId]);
    res.json(queryResult);
  } catch (err) {
    console.error(`Error `, err.message);
    next(err);
  }
});

router.get('/articlesByPhrase', async function(req, res, next) {
  try {
    const queryResult = await query('SELECT * FROM articles WHERE person_id = ? AND ', [req.query.personId]);
    res.json(queryResult);
  } catch (err) {
    console.error(`Error `, err.message);
    next(err);
  }
});

export default router;