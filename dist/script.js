var listaFilmesImagens = [];
var listaFilmesNomes = [];
var listaCategoriasFilmes = [];

listaFilmesImagens.push("https://m.media-amazon.com/images/M/MV5BMTk1MzY1MzU1MF5BMl5BanBnXkFtZTcwOTQ2NjM3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmesNomes.push("Viagem ao centro da terra");
listaCategoriasFilmes.push("Ação, Aventura");

listaFilmesImagens.push("https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmesNomes.push("Enrolados");
listaCategoriasFilmes.push("Animação, Aventura");

listaFilmesImagens.push("https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg");
listaFilmesNomes.push("Star Wars III: A vingança dos Sith");
listaCategoriasFilmes.push("Aventura, Fantasia");

listaFilmesImagens.push("https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmesNomes.push("Vingadores: Guerra Infinita");
listaCategoriasFilmes.push("Ação, Aventura");

listaFilmesImagens.push("https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmesNomes.push("Harry Potter e a Ordem da Fênix");
listaCategoriasFilmes.push("Ação, Fantasia");

listaFilmesImagens.push("https://m.media-amazon.com/images/M/MV5BMDc1NzM1OTgtOGYxMS00ZWE1LWEzZWMtNWEyOTI2NDJjOTU2XkEyXkFqcGdeQXVyNjQzNzA2NjM@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaFilmesNomes.push("Zathura");
listaCategoriasFilmes.push("Ação, Aventura");

for(var i = 0; i<listaFilmesImagens.length; i++){
  //document.write("<img src="+listaFilmes[i]+">");
  document.getElementById("filmes").innerHTML += "<div class='filme'><img src='"+listaFilmesImagens[i]+"'><p>"+listaFilmesNomes[i]+"</p><div class='categorias'>"+listaCategoriasFilmes[i]+"</div></div>";
}

var listaSeriesImagens = [];
var listaSeriesNomes = [];
var listaCategoriasSeries = [];

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR4,0,182,268_AL_.jpg");
listaSeriesNomes.push("Doctor Who");
listaCategoriasSeries.push("Aventura, Drama");

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_UY268_CR9,0,182,268_AL_.jpg");
listaSeriesNomes.push("How I Met Your Mother");
listaCategoriasSeries.push("Comédia, Romance");

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_UY268_CR0,0,182,268_AL_.jpg");
listaSeriesNomes.push("Prison Break");
listaCategoriasSeries.push("Ação, Drama");

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg");
listaSeriesNomes.push("Anne with an E");
listaCategoriasSeries.push("Drama, Família");

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaSeriesNomes.push("Brooklin Nine-Nine");
listaCategoriasSeries.push("Comédia, Crime");

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BNjBmZmI0ZDktODI2MS00MDU1LTk0NDYtNGE0MDc0OWVkYzcwXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaSeriesNomes.push("Once Upon a time");
listaCategoriasSeries.push("Aventura, Fantasia");

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BYmY2MjY2MGQtYjhjZi00OGY3LWFjMWUtMGQxZmUyODkzZmVkXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaSeriesNomes.push("Scorpion");
listaCategoriasSeries.push("Ação, Crime");

listaSeriesImagens.push("https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX182_CR0,0,182,268_AL_.jpg");
listaSeriesNomes.push("Avatar: A lenda de Aang");
listaCategoriasSeries.push("Animação, Ação");

for(var i = 0; i<listaSeriesImagens.length; i++){
  document.getElementById("series").innerHTML += "<div class='filme'><img src='"+listaSeriesImagens[i]+"'><p>"+listaSeriesNomes[i]+"</p><div class='categorias'>"+listaCategoriasSeries[i]+"</div></div>";
}