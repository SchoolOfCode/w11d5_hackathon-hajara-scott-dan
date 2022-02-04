import React from "react";
import emojisArr from "../../emojiData";
import css from "./emoji.module.css";

function Emoji({ happiness }) {
  return <p className={css.emoji}>{emojisArr[happiness]}</p>;
}

export default Emoji;
