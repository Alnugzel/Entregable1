import React from "react";
import randomArray from "../utils/randomArray";
import phrases from "../utils/phrases.json";

const RandomButton = ({ setPhrase, arrBg, setRandomBg, randomBg, colors }) => {
  const handleRandomPhrase = () => {
    const randomPhrase = randomArray(phrases);
    setPhrase(randomPhrase);
    const bgRandom = randomArray(arrBg);
    setRandomBg(bgRandom);
  };

  const objStyleColors = {
    backgroundColor: colors[randomBg - 1],
  };

  return (
    <div className="content__button">
      <button
        style={objStyleColors}
        onClick={handleRandomPhrase}
        className="btn__random"
      >
        Push me 💘
      </button>
    </div>
  );
};

export default RandomButton;
