const mongoose = require('mongoose');

const Task = mongoose.model('Task', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
}));

exports.Task = Task;