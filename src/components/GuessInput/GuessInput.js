import React from "react";
import { MAX_WORD_LENGTH } from "../../constants";

function GuessInput({ handleNextGuess }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleNextGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={MAX_WORD_LENGTH}
        maxLength={MAX_WORD_LENGTH}
        pattern={`[A-Za-z]{${MAX_WORD_LENGTH}}`}
        title="A 5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
