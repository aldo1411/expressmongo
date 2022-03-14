const mongoose = require('mongoose');
const Schema = mongoose.Schema

const booksSchema = new Schema({
    name: String,
    gender: String,
    author: String,
    status: String
}, { collection: 'books' })

const Book = mongoose.model('book', booksSchema)

module.exports = Book