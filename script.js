const API_KEY = '6a5150a19a26986f9fe81b52ff4eeda3';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';
const erro = document.getElementById('erro');

function getMovie() {
    const movieId = Math.floor(Math.random() * 1000) + 1;
    const url = `${BASE_URL}${movieId}?api_key=${API_KEY}&${language}`;

    fetch(url)
        .then(response => {
            if (response.status === 404) {
                erro.innerHTML = 'Lamentamos, mas a API não conseguiu localizar o filme';
            } else {
                erro.innerHTML = ''
            }
            return response.json();
        })
        .then(data => {
            title.textContent = data.title;
            resumo.textContent = data.overview;
            capa.src = `${IMG_URL}${data.poster_path}`;
            document.body.appendChild(img);
        })
        .catch(error => console.error(error));
};




let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'veja os melhores filmes'
});
window.addEventListener('focus', () => {
    document.title = docTitle;
});









