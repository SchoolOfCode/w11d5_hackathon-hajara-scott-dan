import React from "react";
import Letter from "../Letter";

function LetterArea({ currentWord }) {
  let wordArr = currentWord.split("");
  //   console.log(wordArr);

  return wordArr.map((letter) => {
    return <Letter letter={letter} />;
  });
}

export default LetterArea;
