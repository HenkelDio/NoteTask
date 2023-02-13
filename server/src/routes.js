const { Router } = require('express');

const TaskController = require('./controllers/TaskController');

const route = Router();

route.get('/tasks', TaskController.index);
route.post('/tasks', TaskController.create);
route.put('/tasks/:id', TaskController.update);
route.delete('/tasks/:id', TaskController.delete);

module.exports = route;
