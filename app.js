const express = require('express');
const logger = require('./middleware/logger');
const connectDB = require('./services/mongoose')

const app = express();

//DB
connectDB()

//MIddleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API route
app.use('/api/students', require('./routes/api/students'));
// API route
app.use('/api/books', require('./routes/api/books'));

module.exports = app
