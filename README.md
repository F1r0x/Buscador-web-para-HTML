# Buscador interno para páginas Web.

![Alt text](/img/0001.png)

Código para crear un buscador interno en nuestra página web.
<br>
Simplemente pegar cada código en su archivo correspondiente:
<br>

### index.hrml

```
<div class="search-container">
    <input type="text" id="search" placeholder="Buscar artículos...">
</div>
```

<br>

### styles.css

```
.search-container input {
    padding: 5px;
    border: 1px solid #000000;
    border-radius: 5px;
    box-shadow: 0 2px 5 px rgba(0, 0, 0, 0.1);
}
```

<br>

### script.js

```
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

```
