const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Learning101www!',
  database: 'qt_example'
});
module.exports = connection;