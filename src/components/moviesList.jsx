import React from "react";
import Movie from "./Movie";
import styles from "./movies.module.css"

const MoviesList = ({ movies, handleMovieSelect }) => {
  return (
    <div className={styles.moviesList}>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          key={movie.id}
          handleMovieSelect={handleMovieSelect}
        />
      ))}
    </div>
  );
};

export default MoviesList;
