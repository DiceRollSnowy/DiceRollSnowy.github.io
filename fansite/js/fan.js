// ファンサーバのリンクを反映
document.addEventListener("DOMContentLoaded", () => {
    const fanServerLink = document.getElementById("fanServerLink");

    if (fanServerLink) 
    {
        fanServerLink.href = FAN_SERVER_URL;
    }
});
