// Node.js中使用mysql2库
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

// 查询用户
const [users] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
