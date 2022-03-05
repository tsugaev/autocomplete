import React from "react";
import Movie from "./Movie";
import styles from "./movies.module.css";
import propTypes from "prop-types";

const MoviesList = React.memo(({ movies, onMovieSelect, searching }) => {
  return searching ? (
    <div>Searching ...</div>
  ) : (
    <div className={styles.moviesList}>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          key={movie.id}
          onMovieSelect={onMovieSelect}
        />
      ))}
    </div>
  );
});

MoviesList.propTypes = {
  movies: propTypes.array,
  onMovieSelect: propTypes.func,
  searching: propTypes.bool,
};

export default MoviesList;
