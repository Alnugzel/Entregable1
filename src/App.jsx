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

  const objStyle = {
    backgroundImage: `url("/images/bg${randomBg}.jpg")`,
  };

  console.log(phrase);

  return (
    <main style={objStyle} className="main__content">
      <h1 className="main__title">GALLETAS DE LA</h1>
      <h1 className="main__title">FORTUNA</h1>
      <PhrasesContent phrase={phrase} randomBg={randomBg} />
      <RandomButton
        setPhrase={setPhrase}
        arrBg={arrBg}
        setRandomBg={setRandomBg}
        randomBg={randomBg}
      />
    </main>
  );
}

export default App;
