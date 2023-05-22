import { useState } from "react";
import "./App.css";
import PhrasesContent from "./components/PhrasesContent";
import RandomButton from "./components/RandomButton";
import phrases from "./utils/phrases.json";
import randomArray from "./utils/randomArray";

function App() {
  const randomPhrase = randomArray(phrases);
  const [phrase, setPhrase] = useState(randomPhrase);

  const arrBg = [1, 2, 3, 4];
  const randomBackG = randomArray(arrBg);
  const [randomBg, setRandomBg] = useState(randomBackG);

  const colors = [
    "hsla(131, 100%, 23%, 1)",
    "hsla(316, 100%, 32%, 1)",
    "hsla(48, 100%, 45%, 1)",
    "hsla(205, 100%, 44%, 1)",
  ];

  const objStyle = {
    backgroundImage: `url("/images/bg${randomBg}.jpg")`,
  };

  return (
    <main style={objStyle} className="main__content">
      <h1 className="main__title">GALLETAS DE LA FORTUNA</h1>
      <PhrasesContent phrase={phrase} randomBg={randomBg} colors={colors} />
      <RandomButton
        setPhrase={setPhrase}
        arrBg={arrBg}
        setRandomBg={setRandomBg}
        randomBg={randomBg}
        colors={colors}
      />
    </main>
  );
}

export default App;
