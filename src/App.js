import logo from "./soc-logo.svg";
import "./App.css";
import Play from "./Components/Play/index.js";
import words from "./words-data/words.js";
import { useState, useEffect } from "react";
import LetterArea from "./Components/LetterArea";
import Input from "./Components/Input";
import Emoji from "./Components/Emoji";
import emojisArr from "./emojiData";

function App() {
  const [wordList, setWordList] = useState(words);
  const [currentWord, setCurrentWord] = useState("");
  const [input, setInput] = useState("");
  const [happiness, setHappiness] = useState(0);
  const [lettersGuessed, setLettersGuessed] = useState({
    0: false,
    1: true,
    2: false,
    3: false,
    4: false,
  });

  function randomWord(wordList) {
    let min = Math.ceil(0);
    let max = Math.floor(5);
    let random = Math.floor(Math.random() * (max - min) + min);
    setCurrentWord(wordList[random]);
  }

  // function increaseIndex(index) {
  //   index;
  // }
  //useEffect(randomWord(wordList), []);

  function handleInput(userInput) {
    console.log(userInput);
    setInput(userInput);
  }

  function checkWord(input) {
    let wordArr = currentWord.toUpperCase().split("");
    //if letter matches
    if (wordArr.includes(input)) {
      let index = wordArr.indexOf(input);
      console.log(wordArr);
      console.log("you got 1");
      //need a function here to handle more than one of the same letter
      setLettersGuessed({ ...lettersGuessed, [index]: true });
      // if letter is wrong AND is not blank
    } else if (input !== "") {
      //increment happiness index
      if (happiness < 4) {
        setHappiness(happiness + 1);
      } else {
        console.log("GAME OVER");
      }
    }
  }

  useEffect(() => {
    checkWord(input);
    console.log(lettersGuessed);
  }, [input]);

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
      <Emoji happiness={happiness} />
      <LetterArea currentWord={currentWord} lettersGuessed={lettersGuessed} />
      <Input handleInput={handleInput} />
    </div>
  );
}

export default App;
