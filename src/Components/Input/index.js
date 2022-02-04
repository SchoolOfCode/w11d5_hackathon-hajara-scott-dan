import React from "react";
import { useState } from "react";

function Input({ handleInput }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleInput(input);
        }}
      ></button>
    </div>
  );
}

export default Input;
