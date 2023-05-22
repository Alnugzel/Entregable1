import React from "react";

const PhrasesContent = ({ phrase, randomBg, colors }) => {
  const objStyleColors = {
    color: colors[randomBg - 1],
  };

  return (
    <>
      <div className="random__phrase">
        <div className="content__image">
          <img src="/images/rectangle1.svg" alt="rectangle" />
        </div>
        <div style={objStyleColors} className="content__phrase">
          <p>{phrase.phrase}</p>
        </div>
      </div>
      <div style={objStyleColors} className="content__author">
        {" "}
        <span>Fuente: </span>
        {phrase.author}
      </div>
    </>
  );
};

export default PhrasesContent;
