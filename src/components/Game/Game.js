import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [checkedGuesses, setCheckedGuesses] = React.useState([]);

  const handleNextGuess = (nextGuess) => {
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    const checkedGuess = checkGuess(nextGuess, answer);
    setCheckedGuesses([...checkedGuesses, checkedGuess]);

    if (nextGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleNextGuess={handleNextGuess}
        disabled={gameStatus !== "running"}
      />
      <Keyboard checkedGuesses={checkedGuesses} />

      {["won", "lost"].includes(gameStatus) && (
        <Banner
          isHappy={gameStatus === "won"}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
