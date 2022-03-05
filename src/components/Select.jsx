import React, { useState } from "react";
import movies from "../movies.json";
import MoviesList from "./moviesList";
import styles from "./select.module.css";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";

const Select = () => {
  const [popUp, setPopUp] = useState(false);
  const [text, setText] = useState("");
  const [select, setSelect] = useState(false);

  const handlePopUp = () => {
    setPopUp(true);
  };
  const handleText = (e) => {
    setText(e.target.value);
    setSelect(false);
  };
  const handleMovieSelect = (e) => {
    setText(e.target.innerText);
    setSelect(true);
  };
  const handleOutsideClick = () => {
    setPopUp(false);
  };
  const filteredMovies = movies.filter((movie) =>
    movie.title.toUpperCase().includes(text.toUpperCase())
  );

  return (
    <div className={styles.main}>
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div>
          <input
            type="text"
            value={text}
            onChange={handleText}
            onClick={handlePopUp}
            onBlur={handlePopUp}
            className={styles.input}
          />
        </div>
        {popUp && !select && (
          <MoviesList
            movies={filteredMovies}
            handleMovieSelect={handleMovieSelect}
          />
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default Select;
