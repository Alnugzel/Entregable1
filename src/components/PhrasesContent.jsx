import React from "react";

const PhrasesContent = ({ phrase, randomBg }) => {
  let colors = "";

  if (randomBg === 4) colors = "hsla(205, 100%, 44%, 1)";
  if (randomBg === 3) colors = "hsla(48, 100%, 45%, 1)";
  if (randomBg === 2) colors = "hsla(316, 100%, 32%, 1)";
  if (randomBg === 1) colors = "hsla(131, 100%, 23%, 1)";

  const objStyleColors = {
    color: colors,
  };

  return (
    <div className="random__phrase">
      <div className="content__image">
        <img src="/images/rectangle1.svg" alt="rectangle" />
      </div>
      <div style={objStyleColors} className="content__phrase">
        <p>{phrase.phrase}</p>
      </div>
    </div>
  );
};

export default PhrasesContent;
