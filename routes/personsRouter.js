const express = require('express');
const { query } = require('../services/db');
const router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const queryResult = await query('SELECT * FROM persons');
    res.json(queryResult);
  } catch (err) {
    console.error(`Error `, err.message);
    next(err);
  }
});

module.exports = router;