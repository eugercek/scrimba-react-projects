import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./Intro";
import Playing from "./Playing";
import Results from "./Results";

function App() {
  // There are 3 states: intro -> playing -> end
  const [gameState, setGameState] = useState("intro");
  const [questions, setQuestions] = useState([]);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=2&category=15&type=multiple")
      .then((resp) => resp.json())
      .then((data) => {
        setQuestions(data.results);
        setSelections(new Array(data.results).fill(undefined));
      });
  }, []);

  function startGame() {
    console.log(questions.map((q) => q.correct_answer));
    setGameState("playing");
  }

  function endGame() {
    setGameState("end");
  }

  // TODO Find better way
  function getResults() {
    const correctAnswers = questions.map((q) => q.correct_answer);
    let correct = 0;
    let empty = 0;
    let wrong = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === selections[i]) {
        correct++;
      } else if (selections[i] == undefined) {
        empty++;
      } else {
        wrong++;
      }
    }
    debugger;

    return {
      correct,
      empty,
      wrong,
    };
  }

  return (
    <div className="App">
      {gameState === "intro" && <Intro startGame={startGame} />}
      {gameState === "playing" && (
        <Playing
          questions={questions}
          setSelections={setSelections}
          endGame={endGame}
        />
      )}
      {gameState === "end" && (
        <Results questions={questions} results={getResults()} />
      )}
    </div>
  );
}

export default App;
