const express = require('express');
const { query } = require('../services/db');
const router = express.Router();

router.get('/getArticlesByPersonId', async function(req, res, next) {
  try {
    const queryResult = await query('SELECT * FROM articles WHERE person_id = ?', [req.query.personId]);
    res.json(queryResult);
  } catch (err) {
    console.error(`Error `, err.message);
    next(err);
  }
});

// changee

router.get('/articlesByPhrase', async function(req, res, next) {
  try {
    const queryResult = await query('SELECT * FROM articles WHERE person_id = ? AND ', [req.query.personId]);
    res.json(queryResult);
  } catch (err) {
    console.error(`Error `, err.message);
    next(err);
  }
});

module.exports = router;