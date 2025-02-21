// login.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        username: e.target.username.value,
        password: e.target.password.value
    };

    // 发送登录请求到后端
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.success) {
        window.location.href = '/dashboard.html'; // 跳转到后台
    } else {
        alert('登录失败: ' + result.message);
    }
});
