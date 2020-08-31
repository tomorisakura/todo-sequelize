const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const userController = require('../controller/users.controller');
const todoController = require('../controller/todo.controller');

router.route('/api/todo/user')
.get(userController.get)
.post(userController.post)
.patch(userController.update)
.delete(userController.delete);

router.route('/api/todo/todo')
.get(todoController.get)
.post(todoController.post)
.patch(todoController.update);

router.get('/api/todo/user-todo', userController.getTodoByUser);

module.exports = router;