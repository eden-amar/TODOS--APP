// const Category = require('../models/category.js');
const Todo = require('../models/todo')

async function getTodos(req, res) {
    const todos = await Todo
        .find({})
        .sort('-created')
        .populate('user', 'fullName userName ')
        .select('task user created')
        .exec();

    res.json(todos);
}

async function getSingleTodos(req, res) {
    try {
        const todoId = req.params.todoId;
        const todo = await Todo.findOne({ _id: todoId }).exec();

        res.json(todo);
    }
    catch {
        res.status(500).json({ message: 'server error' });
    }

}
async function createTodos(req, res) {
    const body = req.body;
    const todo = new Todo(body);

    try {
        await todo.save();
    } catch {
        res.status(500).json({ message: 'server error' });
        return;
    }



    res.json(todo);
}


async function removeTodo(req, res) {
    try {
        const todoId = req.params.todoId;
        const todo = await Todo.deleteOne({ _id: todoId }).exec();

        res.json(todo);

    } catch {
        res.status(500).json({ message: 'server error' });
    }
}
module.exports = {
    getTodos,
    getSingleTodos,
    createTodos,
    removeTodo
}