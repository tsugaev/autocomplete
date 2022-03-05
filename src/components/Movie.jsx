import React from "react";

const Movie = ({title, handleMovieSelect}) => {
  return (
    <div onClick={(e) => handleMovieSelect(e)} >
      {title}
    </div>
  );
};

export default Movie;
