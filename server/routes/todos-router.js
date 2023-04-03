const router = require('express').Router();
const controller = require('../controllers/todos-controllers')

router.get('/api/todos/:todoId' , controller.getSingleTodos);
router.put('/api/todos/:todoId');

router.get('/api/todos', controller.getTodos);
router.post('/api/todos', controller.createTodos)

router.delete('/api/todos/:todoId', controller.removeTodo);






// router.get("/api/todos", todosController.getTodos)
// router.delete('/api/todos/:todoId', todosController.removeTodo);
// router.put("/api/todos/:todoId", todosController.updateTodo);
// router.post("/api/todos", todosController.createTodo)


module.exports = router