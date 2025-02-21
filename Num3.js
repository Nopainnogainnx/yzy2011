// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// 模拟数据库用户数据（实际应使用数据库）
const users = [
    { username: 'admin', password: 'hashed_password' }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (user && verifyPassword(password, user.password)) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: '用户名或密码错误' });
    }
});

function verifyPassword(inputPassword, storedHash) {
    // 实际应使用bcrypt等库进行密码验证
    return inputPassword === storedHash;
}
