var mongoose = require('mongoose');
var bookSchema = require('./bookSchema');

var bookModel = mongoose.model('booksModel',bookSchema);

module.exports = bookModel;