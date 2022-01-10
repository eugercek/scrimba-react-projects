import "./Intro.css";

export default function Welcome({ startGame }) {
  return (
    <main className="intro">
      <h2 className="title">Quizzical</h2>
      <h5 className="description">A trivia game ...</h5>
      <button onClick={startGame} className="intro--button btn-dark">
        Start quiz
      </button>
    </main>
  );
}
