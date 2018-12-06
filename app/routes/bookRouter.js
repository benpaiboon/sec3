// Init Express & Router
const express = require('express');
const router = express.Router();

// Init Book Controller
const bookController = require('../controllers/bookController');

// Init Routes
router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBookById);
router.delete('/books/:id', bookController.removeBookById);

module.exports = router;