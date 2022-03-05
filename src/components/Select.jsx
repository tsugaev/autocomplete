import React, { useEffect, useMemo, useState } from "react";
import movies from "../movies.json";
import MoviesList from "./MoviesList";
import styles from "./select.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import { useDebounce } from '../useDebounce';

const Select = () => {
  const [text, setText] = useState("");
  const [select, setSelect] = useState(false);
  const [searching, setSearching] = useState(false);

  const debouncedSearchText = useDebounce(text, 1500);

  console.log(debouncedSearchText);

  const handlePopUp = () => {
    setSelect(true);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleMovieSelect = (title) => {
    setText(title);
    setSelect(false);
  };

  const handleOutsideClick = () => {
    setSelect(false);
  };

  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toUpperCase().includes(text.toUpperCase())
      ),
    [text]
  );

  useEffect(() => {
    if (debouncedSearchText) {
      setSearching(true);
    }
  }, [debouncedSearchText])
  return (
    <div className={styles.main}>
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <div>
          <input
            type="text"
            value={text}
            onChange={handleChangeText}
            onClick={handlePopUp}
            onBlur={handlePopUp}
            className={styles.input}
          />
        </div>
        {select && (
          <MoviesList
            movies={filteredMovies}
            onMovieSelect={handleMovieSelect}
            searching={searching}
          />
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default Select;
