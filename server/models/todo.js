const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

const todoSchema = new mongoose.Schema({

    task: { type: String, required: true },
    user: { type: String },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },

});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

    // author: {type: ObjectId, required: true, ref: 'User'},
    // caegory: {type: ObjectId, required: true, ref: 'Category', index:true},