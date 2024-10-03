document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const articles = document.querySelectorAll('.article'); // Asegúrate de seleccionar los elementos con clase 'article'

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();

        articles.forEach(article => {
            const title = article.querySelector('h2').innerText.toLowerCase(); // Obtenemos el texto del título
            if (title.includes(query)) {
                article.style.display = 'block'; // Mostramos si coincide
            } else {
                article.style.display = 'none'; // Ocultamos si no coincide
            }
        });
    });
});
