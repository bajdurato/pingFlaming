const mongoose = require('mongoose');

const Tag = mongoose.model('Tags', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
}));

exports.Tag = Tag;