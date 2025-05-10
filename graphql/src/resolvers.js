const { v4: uuidv4 } = require('uuid');
const { movies } = require('./db');

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => movies.find(movie => movie.id === id)
  },

  Mutation: {
    addMovie: (_, { title, year, director }) => {
      const newMovie = { id: uuidv4(), title, year, director };
      movies.push(newMovie);
      return newMovie;
    },
    deleteMovie: (_, { id }) => {
      const index = movies.findIndex(movie => movie.id === id);
      if (index === -1) return null;
      const deletedMovie = movies.splice(index, 1)[0];
      return deletedMovie;
    }
  }
};

module.exports = resolvers;