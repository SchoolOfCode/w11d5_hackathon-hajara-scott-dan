import logo from "./soc-logo.svg";
import "./App.css";
import Play from "./Components/Play/Play.js";
import words from "./words-data/words.js";
import { useState } from "react";

function App() {
  const [wordList, setWordList] = useState(words);
  const [currentWord, setCurrentWord] = useState("");

  function randomWord(wordList) {
    let min = Math.ceil(0);
    let max = Math.floor(5);
    let random = Math.floor(Math.random() * (max - min) + min);

    setCurrentWord(wordList[random]);
    console.log("The word is: " + currentWord);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} alt="logo" />
        <p className="App-logo">Worjie!</p>
      </header> */}

      <h1>Worjie!</h1>
      <Play
        clickHandler={() => {
          randomWord(wordList);
        }}
      />
    </div>
  );
}

export default App;
