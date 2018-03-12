const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/books', async (req, res) => {
  try {
    res.send(await Book.find({}));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    res.send(await Book.findById({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/books', async (req, res) => {
  try {
    res.send(await Book.create(req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/books/:id', async (req, res) => {
  try {
    res.send(await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, (error) => {
      if (error) res.status(500).json({ error: error.message });
      Book.findOne({ _id: req.params.id })
    }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/books/:id', async (req, res) => {
  try {
    res.send(await Book.findByIdAndRemove({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;