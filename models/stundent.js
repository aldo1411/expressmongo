const mongoose = require('mongoose');
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    email: String,
    status: String
})

const Student = mongoose.model('student', studentSchema)

module.exports = Student