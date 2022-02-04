import React from "react";
import { useState } from "react";

function Input({ handleInput }) {
	const [input, setInput] = useState("");
	return (
		<div>
			<input
				maxLength="1"
				type="text"
				onChange={(e) => {
					setInput(e.target.value.toUpperCase());
				}}
			></input>
			<button
				onClick={() => {
					handleInput(input);
				}}
			>
				Submit
			</button>
		</div>
	);
}

export default Input;
