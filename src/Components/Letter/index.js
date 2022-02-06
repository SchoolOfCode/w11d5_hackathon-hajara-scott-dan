import React from "react";
import css from "./letter.module.css";

function Letter({ letter, visibility }) {
  if (visibility === true) {
    return <span className={css.letter}>{letter.toUpperCase()}</span>;
  } else {
    return <span className={css.letter}>_</span>;
  }
}

export default Letter;
