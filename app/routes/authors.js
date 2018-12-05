const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/authors', async (req, res) => {
  try {
    res.send(await Author.find({}));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/authors/:id', async (req, res) => {
  try {
    res.send(await Author.findById({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/authors', async (req, res) => {
  try {
    res.send(await Author.create(req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/authors/:id', async (req, res) => {
  try {
    res.send(await Author.findByIdAndUpdate({ _id: req.params.id }, req.body, (error) => {
      if (error) res.status(500).json({ error: error.message });
      Author.findOne({ _id: req.params.id })
    }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/authors/:id', async (req, res) => {
  try {
    res.send(await Author.findByIdAndRemove({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;