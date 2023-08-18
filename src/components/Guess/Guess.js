import React from "react";
import { MAX_WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(MAX_WORD_LENGTH).map((num) => (
        <span className="cell" key={num}>
          {guess ? guess[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
