const mongoose = require('mongoose');

let count = 0

const connectDB = () =>{
    console.log('conecting to MongoDB...')
    mongoose.connect('mongodb://localhost:27017/api-students').then( () =>{
        console.log('conected to MongoDB :)');
    }).catch(e =>{
        console.log('conection failed to MongoDB :(, retry after 5 seconds', ++count);
        setTimeout(connectDB, 5000)
    })
}

module.exports = connectDB