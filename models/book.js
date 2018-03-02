const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const BookSchema = new Schema({
  title: String,
  author: String,
  summary: String,
  ISBN: String,
  genre: String,
  url: String
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;