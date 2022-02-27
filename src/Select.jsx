import React, { useState } from "react";
import movies from "./movies.json";

const Select = () => {
  const [popUp, setPopUp] = useState(false);
  const [text, setText] = useState("");

  const handlePopUp = () => {
    !text && setPopUp(!popUp);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toUpperCase().includes(text.toUpperCase())
  );
  const handleMovieSelect = (e) => {
    setText(e.target.innerText);
    setPopUp(false);
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => handleText(e)}
          onClick={handlePopUp}
          onBlur={handlePopUp}
        />
      </div>
      {popUp && (
        <div>
          {filteredMovies.map((movie) => (
            <div onClick={(e) => handleMovieSelect(e)} key={movie.id}>{movie.title}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Select;
