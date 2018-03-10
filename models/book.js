const mongoose = require('mongoose');
const AuthorSchema = require('./author');
const Schema = mongoose.Schema; 

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true,'Title field is required']
  },
  author: String,
  summary: String,
  ISBN: String,
  genre: String,
  url: String
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;