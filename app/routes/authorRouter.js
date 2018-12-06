// Init Express & Router
const express = require('express');
const router = express.Router();

// Init author Controller
const authorController = require('../controllers/authorController');

// Init Routes
router.get('/authors', authorController.getAuthors);
router.get('/authors/:id', authorController.getAuthorById);
router.post('/authors', authorController.createAuthor);
router.put('/authors/:id', authorController.updateAuthorById);
router.delete('/authors/:id', authorController.removeAuthorById);

module.exports = router;