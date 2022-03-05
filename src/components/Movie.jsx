import React from "react";

const Movie = ({title, handleMovieSelect}) => {
  return (
    <div onClick={handleMovieSelect} >
      {title}
    </div>
  );
};

export default Movie;
