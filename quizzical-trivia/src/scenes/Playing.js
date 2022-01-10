import Question from "../components/Question";
import { nanoid } from "nanoid";
import "./Playing.css";

export default function Playing({
  questions,
  setSelections,
  endGame,
  selections,
}) {
  const elements = questions.map((question, i) => (
    <Question
      key={nanoid()}
      question={question.question}
      answers={[question.correct_answer, ...question.incorrect_answers]}
      handleClick={(answer) => {
        setSelections((prev) => {
          const old = [...prev];
          old[i] = answer;
          return old;
        });
      }}
      selected={selections[i]}
    />
  ));
  return (
    <main className="playing">
      {elements}
      <button onClick={endGame} className="playing--button btn-dark">
        Check answers
      </button>
    </main>
  );
}
