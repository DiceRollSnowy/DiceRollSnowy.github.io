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

    setActiveNav();
}

async function loadFooter()
{
    const footer = document.getElementById("footer");
    if (!footer)
    {
        return;
    }

    const response = await fetch("components/footer.html");
    if (!response.ok) 
    {
        console.error("フッターの読み込みに失敗しました");
        return;
    }
    footer.innerHTML = await response.text();
}

function setActiveNav() 
{
    const currentPage = document.body.dataset.page;

    // data-page がないページは active を付けない
    if (!currentPage) {
        return;
    }

    document.querySelectorAll(".site-nav a").forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }
    });
}

loadHeader();
loadFooter();
