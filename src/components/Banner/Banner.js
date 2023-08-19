import React from "react";

function Banner({ isHappy, numOfGuesses, answer, handleRestartGame }) {
  const bannerClasses = ["banner", isHappy ? "happy" : "sad"].join(" ");

  return (
    <div className={bannerClasses}>
      {isHappy ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button onClick={handleRestartGame}>Restart game</button>
    </div>
  );
}

export default Banner;
