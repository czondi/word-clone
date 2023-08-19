import React from "react";

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function Keyboard({ checkedGuesses = [] }) {
  const getLetterClass = (letter) => {
    const letterStatus = checkedGuesses.flat().findLast((guess) => {
      return guess.letter === letter;
    });

    return ["letter", letterStatus?.status].filter(Boolean).join(" ");
  };

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="row" key={index}>
          {row.split("").map((letter) => (
            <div className={getLetterClass(letter)} key={letter}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
