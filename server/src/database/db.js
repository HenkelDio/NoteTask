const mysql = require('mysql2/promise');

async function connect() {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Willian2002@',
    database: 'mytasks',
  });

  return con;
}

exports.query = async (query) => {
  const con = await connect();
  const [rows] = await con.query(query);
  return rows;
};
