// 通过按钮点击动态修改内容
function loadData() {
    document.getElementById("content").innerHTML = "内容已更新！" + new Date().toLocaleTimeString();
}

// 通过Fetch API获取外部数据（模拟动态请求）
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    document.getElementById("content").innerHTML = data.title;
}
// 页面加载时自动调用
window.onload = fetchData;
