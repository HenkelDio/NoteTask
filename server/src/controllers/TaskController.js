const TaskRepository = require('../repositories/TaskRepository');

class TaskController {
  async index(req, res) {
    const tasks = await TaskRepository.findAll();
    res.send(tasks);
  }

  async create(req, res) {
    const { title, content } = req.body;
    const task = await TaskRepository.create({ title, content });
    res.send(task);
  }

  async update(req, res) {
    const { title, content } = req.body;
    const { id } = req.params;

    const task = await TaskRepository.update(id, { title, content });
    res.send(task);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deleteOp = await TaskRepository.delete(id);
    res.sendStatus(200);
  }
}

module.exports = new TaskController();
