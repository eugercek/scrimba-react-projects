import "./App.css";
import { useState, useEffect } from "react";
import Intro from "./scenes/Intro";
import Playing from "./scenes/Playing";
import Results from "./scenes/Results";

function App() {
  // There are 3 states: intro -> playing -> end
  const [gameState, setGameState] = useState("intro");
  const [questions, setQuestions] = useState([]);
  const [selections, setSelections] = useState([]);
  const [newGame, setNewGame] = useState();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((resp) => resp.json())
      .then((data) => {
        setQuestions(data.results);
        setSelections(new Array(data.results).fill(undefined));
      });
    setGameState("intro");
  }, [newGame]);

  function startGame() {
    console.log(questions.map((q) => q.correct_answer));
    setGameState("playing");
  }

  function endGame() {
    setGameState("end");
  }

  function playAgain() {
    // Just to trigger
    setNewGame(true);
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
          selections={selections}
        />
      )}
      {gameState === "end" && (
        <Results
          questions={questions}
          results={getResults()}
          selections={selections}
          playAgain={playAgain}
        />
      )}
    </div>
  );
}

export default App;
