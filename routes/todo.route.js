const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/todo.controller');

router.get('/test', todo_controller.test);
router.post('/create', todo_controller.create);
router.get('/:id', todo_controller.show);
router.put('/:id/update', todo_controller.update);

module.exports = router;