const mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// defining a user table defination.
const userSchme = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    password: {
        type: String,
        minLength: 7,
        required: true
    },
    email: {
        type: String,
        minLength: 15,
        required: true
    }
})

// crated user model and exported it.
const userModel = mongoose.model('user', userSchme);
module.exports = { userModel };