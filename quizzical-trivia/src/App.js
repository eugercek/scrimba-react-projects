import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./Intro";
import Playing from "./Playing";

function App() {
  // There are 3 states: intro -> playing -> end
  const [gameState, setGameState] = useState("intro");
  const [questions, setQuestions] = useState([]);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=15&type=multiple")
      .then((resp) => resp.json())
      .then((data) => {
        setQuestions(data.results);
        setSelections(new Array(data.results));
      });
  }, []);

  function startGame() {
    setGameState("playing");
    console.log("hi");
  }

  return (
    <div className="App">
      {gameState === "intro" && <Intro startGame={startGame} />}
      {gameState === "playing" && <Playing questions={questions} />}
    </div>
  );
}

export default App;
