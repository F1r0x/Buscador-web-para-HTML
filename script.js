document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const title = article.querySelector('h2').innerText.toLowerCase().trim();
        if (title.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
