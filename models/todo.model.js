const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    description: {type: String, required: true},
    completed: {type: Boolean, default: false},
});

module.exports = mongoose.model('Todo', TodoSchema);