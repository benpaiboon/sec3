// Init Book Model
const Book = require('../models/bookModel');

// Route Functions
const getBooks = async (req, res) => {
  try {
    res.send(await Book.find({}));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getBookById = async (req, res) => {
  try {
    res.send(await Book.findById({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    res.send(await Book.create(req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBookById = async (req, res) => {
  try {
    res.send(await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, (error) => {
      if (error) res.status(500).json({ error: error.message });
      Book.findOne({ _id: req.params.id })
    }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removeBookById = async (req, res) => {
  try {
    res.send(await Book.findByIdAndRemove({ _id: req.params.id }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBookById,
  removeBookById
}