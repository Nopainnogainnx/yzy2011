// dashboard.js
async function loadStats() {
    const response = await fetch('/api/stats');
    const data = await response.json();

    const ctx = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.dates,
            datasets: [{
                label: '每日访问量',
                data: data.visitors,
                borderColor: 'rgb(75, 192, 192)'
            }]
        }
    });
}

loadStats();
