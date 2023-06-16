import React from 'react';
import PropTypes from 'prop-types';
import './movies.css';

const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <li className="movie" key={movie.id}>
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  );
};

const NoMovieResults = () => {
  return <p>No se encontraron películas </p>;
};

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovieResults />;
}

ListOfMovies.defaultProps = {
  movies: [],
};

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

Movies.defaultProps = {
  movies: [],
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
