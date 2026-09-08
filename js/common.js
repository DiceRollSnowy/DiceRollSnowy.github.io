async function loadHeader()
{
    const header = document.getElementById("header");
    if (!header)
    {
        return;
    }

    const response = await fetch("components/header.html");
    if (!response.ok) 
    {
        console.error("ヘッダーの読み込みに失敗しました");
        return;
    }
    header.innerHTML = await response.text();
}

loadHeader();