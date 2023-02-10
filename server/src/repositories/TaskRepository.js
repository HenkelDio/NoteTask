const db = require('../database/db');

class TaskRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM tasks');
    return rows;
  }

  async create({ title, content }) {
    const row = await db.query(`
    INSERT INTO tasks (title, content)
    VALUES('${title}', '${content}')
    `);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
     DELETE FROM tasks
     WHERE id = ${id}
    `);

    return deleteOp;
  }
}

module.exports = new TaskRepository();
