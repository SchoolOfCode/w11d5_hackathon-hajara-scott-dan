import React from "react";
import Letter from "../Letter";

function LetterArea({ currentWord, lettersGuessed }) {
  let wordArr = currentWord.split("");
  //   console.log(wordArr);

  return wordArr.map((letter, index) => {
    if (lettersGuessed[index] === true) {
      return <Letter letter={letter} visibility={true} />;
    } else {
      return <Letter letter={letter} visibility={false} />;
    }
  });
}

export default LetterArea;
