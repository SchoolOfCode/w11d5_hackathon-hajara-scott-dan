import React from "react";
import emojisArr from "../../emojiData";

function Emoji({ happiness }) {
  return <p>{emojisArr[happiness]}</p>;
}

export default Emoji;
