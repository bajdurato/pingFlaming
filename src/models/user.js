const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    login: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    }
})

const User = module.exports = mongoose.model('User', UserSchema);