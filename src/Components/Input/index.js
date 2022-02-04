import React from "react";
import { useState } from "react";
import css from "./input.module.css";

function Input({ handleInput }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        className={css.inputBox}
        maxLength="1"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value.toUpperCase());
        }}
      ></input>
      <button
        onClick={() => {
          handleInput(input);
          setInput("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
