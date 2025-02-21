// server.js
app.get('/api/stats', (req, res) => {
    // 从数据库获取统计数据（示例数据）
    const stats = {
        visitors: [65, 59, 80, 81, 56],
        dates: ['2023-10-01', '2023-10-02', '2023-10-03', '2023-10-04', '2023-10-05']
    };
    res.json(stats);
});
