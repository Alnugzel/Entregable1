import React from "react";
import randomArray from "../utils/randomArray";
import phrases from "../utils/phrases.json";

const RandomButton = ({ setPhrase, arrBg, setRandomBg, randomBg }) => {
  const handleRandomPhrase = () => {
    const randomPhrase = randomArray(phrases);
    setPhrase(randomPhrase);
    const bgRandom = randomArray(arrBg);
    setRandomBg(bgRandom);
  };

  let colors = "";

  if (randomBg === 4) colors = "hsla(205, 100%, 44%, 1)";
  if (randomBg === 3) colors = "hsla(48, 100%, 45%, 1)";
  if (randomBg === 2) colors = "hsla(316, 100%, 32%, 1)";
  if (randomBg === 1) colors = "hsla(131, 100%, 23%, 1)";

  const objStyleColors = {
    backgroundColor: colors,
  };

  return (
    <div>
      <button
        style={objStyleColors}
        onClick={handleRandomPhrase}
        className="btn__random"
      >
        Ver Otro
      </button>
    </div>
  );
};

export default RandomButton;
