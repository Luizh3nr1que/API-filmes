const API_KEY = '6a5150a19a26986f9fe81b52ff4eeda3';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';

const url = "https://api.themoviedb.org/3/movie/550?api_key=6a5150a19a26986f9fe81b52ff4eeda3"



function getMovie() {
    const movieId = Math.floor(Math.random() * 1000) + 1; // Gerando um ID de filme aleatório
    const url = `${BASE_URL}${movieId}?api_key=${API_KEY}&${language}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Exibindo o título
            title.textContent = data.title;
            resumo.textContent = data.overview;

            // Exibindo a capa do filme
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


