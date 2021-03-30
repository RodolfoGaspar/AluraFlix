function adicionarFilme(){
  //console.log("click")
  var filmeFavorito = document.querySelector("#filme").value
  //console.log(filmeFavorito)
  
  var token = "f00d8dc2b87065b83f0fcfbaf31dfbca";
  
  let searchUrl = "https://api.themoviedb.org/3/search/movie?api_key="+token+"&language=pt-BR&query=" + filmeFavorito + "&page=1&include_adult=false"
  
  fetch(searchUrl)
    .then((response) => response.json())
    .then(function (movieData) {
    listarFilmesNaTela(movieData);
  })
  
  //if(filmeFavorito.endsWith(".jpg")){
  //  listarFilmesNaTela(filmeFavorito)
  //} else {
  //  alert("Imagem Inválida!")
  //}
  document.querySelector("#filme").value = "" 
}

function listarFilmesNaTela(filme){
  //console.log(filme)
  
  var listaFilmes = document.querySelector("#listaFilmes")
  var elementoFilme = "<img src=https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + filme.results[0].poster_path +" width=175 height=250>"
  
  //console.log(elementoFilme)
  
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}