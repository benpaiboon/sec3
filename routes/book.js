const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/books', (req, res, next) => {
  Book.find({}).then((book) => {
    res.send(book);
  });
})

router.get('/books/:id', (req, res, next) => {
  Book.findById({ _id: req.params.id }).then((book) => {
    res.send(book);
  });
})

router.post('/books', (req, res, next) => {
  Book.create(req.body).then((book) => {
    res.send(book);
  });
});

module.exports = router;