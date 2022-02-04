import React from "react";

function Letter({ letter, visibility }) {
  if (visibility === true) {
    return <p>{letter.toUpperCase()}</p>;
  } else {
    return <p>_</p>;
  }
}

export default Letter;
