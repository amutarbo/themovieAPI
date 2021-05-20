fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=569da2e6bc2ce68423e19a5400fa0483&language=en-US&page=1')
    .then(res => res.json())
    .then(json => {
        console.log(json.results)
        printPelicula(json.results);
    });

function printPelicula(pelicula) {
    const container = document.getElementById('container')
    pelicula.forEach(pelicula => {
        container.innerHTML += `
          <div class="card">
          <img src=" https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"/>
          <span>Nº.${pelicula.id}</span>
          <h5>${pelicula.original_title.charAt(0).toUpperCase() + pelicula.original_title.slice(1)}</h5>
          </card>
        `;
    });
}

function getPeliculaID(url){

}
/*
<img src="https://api.themoviedb.org/3/movie/${pelicula.id}/images?api_key=569da2e6bc2ce68423e19a5400fa0483"/>
<span>Nº.${pelicula.id}</span>

*/