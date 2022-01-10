import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro";

function App() {
  // There are 3 states: intro -> playing -> end
  const [gameState, setGameState] = useState("intro");

  function startGame() {
    setGameState("playing");
    console.log("hi");
  }

  return (
    <div className="App">
      {gameState === "intro" && <Intro startGame={startGame} />}
    </div>
  );
}

export default App;
