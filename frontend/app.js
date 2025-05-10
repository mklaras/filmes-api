const API_URL = 'http://localhost:4000/';

// Função para executar queries GraphQL
async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return await response.json();
}

// Carregar filmes
async function loadMovies() {
  const query = `
    query {
      movies {
        id
        title
        year
        director
      }
    }
  `;

  const result = await fetchGraphQL(query);
  displayMovies(result.data.movies);
}

// Adicionar filme
async function addMovie(title, year, director) {
  const mutation = `
    mutation AddMovie($title: String!, $year: Int!, $director: String!) {
      addMovie(title: $title, year: $year, director: $director) {
        id
        title
        year
        director
      }
    }
  `;

  await fetchGraphQL(mutation, { title, year: parseInt(year), director });
  loadMovies();
}

// Deletar filme
async function deleteMovie(id) {
  const mutation = `
    mutation DeleteMovie($id: ID!) {
      deleteMovie(id: $id) {
        id
      }
    }
  `;

  await fetchGraphQL(mutation, { id });
  loadMovies();
}

// Exibir filmes na tela
function displayMovies(movies) {
  const moviesList = document.getElementById('moviesList');
  moviesList.innerHTML = '';

  if (movies.length === 0) {
    moviesList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-film fa-3x"></i>
        <h3>Nenhum filme cadastrado</h3>
        <p>Adicione seu primeiro filme usando o formulário acima</p>
      </div>
    `;
    return;
  }

  movies.forEach(movie => {
    const li = document.createElement('li');
    li.className = 'movie-card';
    li.innerHTML = `
      <div class="movie-header">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-year">${movie.year}</div>
      </div>
      <div class="movie-body">
        <p class="movie-director"><strong>Diretor:</strong> ${movie.director}</p>
      </div>
      <div class="movie-footer">
        <button class="btn-danger delete-btn" data-id="${movie.id}">
          <i class="fas fa-trash"></i> Remover
        </button>
      </div>
    `;
    moviesList.appendChild(li);
  });

  // Adicionar event listeners aos botões de deletar
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      if (confirm('Tem certeza que deseja remover este filme?')) {
        deleteMovie(e.target.closest('button').dataset.id);
      }
    });
  });
}

// Event listener para o formulário
document.getElementById('movieForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const year = document.getElementById('year').value;
  const director = document.getElementById('director').value;

  addMovie(title, year, director);

  // Limpar o formulário
  document.getElementById('movieForm').reset();
});

// Carregar filmes quando a página carregar
document.addEventListener('DOMContentLoaded', loadMovies);