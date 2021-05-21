
function obtenerTopRated() {
    console.log("JS")
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=569da2e6bc2ce68423e19a5400fa0483&language=en-US&page=1')
        .then(res => res.json())
        .then(json => {
            console.log(json.results)
            printPelicula(json.results);
        });
}

function obtenerUpcoming() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=569da2e6bc2ce68423e19a5400fa0483&language=en-US&page=1')
        .then(res => res.json())
        .then(json => {
            console.log(json.results)
            printPelicula(json.results);
        });
}

function obtenerPopular() {
    fetch(' https://api.themoviedb.org/3/tv/popular?api_key=569da2e6bc2ce68423e19a5400fa0483&language=en-US&page=1')
        .then(res => res.json())
        .then(json => {
            console.log(json.results)
            printSerie(json.results);
        });
}

function printPelicula(pelicula) {
    const container = document.getElementById('container')
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


