import React from "react";
import { MAX_WORD_LENGTH } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letters = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(MAX_WORD_LENGTH).map((num) => (
        <span
          className={["cell", letters?.[num]?.status].filter(Boolean).join(" ")}
          key={num}
        >
          {guess ? guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
