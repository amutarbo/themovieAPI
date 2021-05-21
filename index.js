let tituloPelicula = "";
let arrayPeliculas = [];

const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '569da2e6bc2ce68423e19a5400fa0483';
let CURRENT_PAGE = 1;

function obtenerPopular() {
    fetch(' https://api.themoviedb.org/3/tv/popular?api_key=569da2e6bc2ce68423e19a5400fa0483&language=en-US&page=1')
        .then(res => res.json())
        .then(json => {
            printSerie(json.results);
            json.results.map(element => arrayPeliculas.push(element.original_title));
            console.log(arrayPeliculas);
        });
}

function obtener(endpoint, params) {
    document.getElementById('wrapper-login').style.display = 'flex';
    const _params = params || {};
    const _page = _params.page || 1;
    const _lang = _params.lang || 'en-US';

    CURRENT_PAGE = _page;

    document.getElementById('btn-back').disabled = (CURRENT_PAGE == 1)

    const _url = new URL(`${API_URL}${endpoint}`);
    _url.searchParams.append('api_key', API_KEY);
    _url.searchParams.append('language', _lang);
    _url.searchParams.append('page', _page);

    fetch(_url)
        .then(res => res.json())
        .then(json => {
            printPelicula(json.results);
            json.results.map(element => arrayPeliculas.push(element.original_title));
            document.getElementById('wrapper-login').style.display = 'none';
            console.log(arrayPeliculas);
        });
}

function busqueda() {
    let input = document.getElementById("searchbar").value;
    let resultado = arrayPeliculas.filter(elem => elem == input);
    console.log("Input: " + input + "" + "Resultado: " + resultado);
}

function printPelicula(pelicula) {
    const container = document.getElementById('container')
    container.innerHTML = '';

    pelicula.forEach(pelicula => {
        container.innerHTML += `
          <div class="card">
          <img src=" https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"/>
          <span>Nota: ${pelicula.vote_average}</span>
          <h5>${pelicula.original_title.charAt(0).toUpperCase() + pelicula.original_title.slice(1)}</h5>
          </card>
        `;
    });
}

function printSerie(serie) {
    const container = document.getElementById('container')
    serie.forEach(serie => {
        container.innerHTML += `
          <div class="card">
          <img src=" https://image.tmdb.org/t/p/w500/${serie.poster_path}"/>
          <span>Nota: ${serie.vote_average}</span>
          <h5>${serie.original_name.charAt(0).toUpperCase() + serie.original_name.slice(1)}</h5>
          </card>
        `;
    });
}


