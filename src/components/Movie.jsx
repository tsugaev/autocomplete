import React from "react";
import propTypes from "prop-types";

const Movie = React.memo(({ title, onMovieSelect }) => {
  return <div onClick={() => onMovieSelect(title)}>{title}</div>;
});

Movie.propTypes = {
  title: propTypes.string,
  onMovieSelect: propTypes.func,
};

export default Movie;
