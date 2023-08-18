import React from "react";

function Banner({ isHappy, numOfGuesses, answer }) {
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
    </div>
  );
}

export default Banner;
