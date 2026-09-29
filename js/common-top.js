// ヘッダー読み込み
async function loadHeader()
{
    const header = document.getElementById("header");
    if (!header)
    {
        return;
    }

    const response = await fetch("../components/header-top.html");
    if (!response.ok) 
    {
        console.error("ヘッダーの読み込みに失敗しました");
        return;
    }
    header.innerHTML = await response.text();
}

// フッター読み込み
async function loadFooter()
{
    const footer = document.getElementById("footer");
    if (!footer)
    {
        return;
    }

    const response = await fetch("../components/footer.html");
    if (!response.ok) 
    {
        console.error("フッターの読み込みに失敗しました");
        return;
    }
    footer.innerHTML = await response.text();
}

loadHeader();
loadFooter();
