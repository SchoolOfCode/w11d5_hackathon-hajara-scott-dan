import logo from "./soc-logo.svg";
import "./App.css";
import Play from "./Components/Play/index.js";
import words from "./words-data/words.js";
import { useState, useEffect } from "react";
import LetterArea from "./Components/LetterArea";
import Input from "./Components/Input";
import Emoji from "./Components/Emoji";

function App() {
	const [wordList, setWordList] = useState(words);
	const [currentWord, setCurrentWord] = useState("");
	const [input, setInput] = useState("");

	function randomWord(wordList) {
		let min = Math.ceil(0);
		let max = Math.floor(5);
		let random = Math.floor(Math.random() * (max - min) + min);
		setCurrentWord(wordList[random]);
		console.log("The word is: " + currentWord);
	}

	//useEffect(randomWord(wordList), []);

	function handleInput(userInput) {
		console.log(userInput);
		setInput(userInput);
		//checkWord(input);
	}

	function checkWord(input) {
		let wordArr = currentWord.split("");
		if (wordArr.includes(input)) {
			console.log("you got 1");
		}
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
			<Emoji />
			<LetterArea currentWord={currentWord} />
			<Input handleInput={handleInput} />
		</div>
	);
}

export default App;
