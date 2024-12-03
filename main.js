const $articles = document.querySelector('#articles');

fetch("data.json")
.then(response => response.json())
.then(response => {
    console.log(response);
    $articles.innerHTML = '';
    response.forEach(data => {
        const template = ` 
            <article class="article">
                <div class="loading-placeholder" style="height: 200px;"><img src="${data.image}" alt="${data.title1}"></div>
                <div class="article-title loading-placeholder">${data.title1}</div>
                <div class="article-subtitle loading-placeholder">${data.title2}</div>
                <div class="article-content loading-placeholder">${data.content}</div>
                <div class="article-meta loading-placeholder">${data.date} - ${data.author}</div>
            </article>`;
            $articles.innerHTML += template;
    })
})