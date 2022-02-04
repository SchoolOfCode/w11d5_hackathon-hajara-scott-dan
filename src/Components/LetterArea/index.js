import React from "react";
import Letter from "../Letter";
import css from "./letterArea.module.css";

function LetterArea({ currentWord, lettersGuessed }) {
  let wordArr = currentWord.split("");
  //   console.log(wordArr);

  return (
    <div className={css.letterArea}>
      {wordArr.map((letter, index) => {
        if (lettersGuessed[index] === true) {
          return <Letter letter={letter} visibility={true} />;
        } else {
          return <Letter letter={letter} visibility={false} />;
        }
      })}
    </div>
  );
}

export default LetterArea;
