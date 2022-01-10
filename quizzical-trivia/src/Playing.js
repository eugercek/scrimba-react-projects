import Question from "./components/Question";
import { nanoid } from "nanoid";

export default function Playing({ questions, setSelections, endGame }) {
  const elements = questions.map((question, i) => (
    <Question
      key={nanoid()}
      question={question.question}
      answers={[question.correct_answer, ...question.incorrect_answers]}
      handleClick={(answer) =>
        setSelections((prev) => {
          const old = [...prev];
          old[i] = answer;
          return old;
        })
      }
    />
  ));
  return (
    <div className="playing">
      {elements}
      <button onClick={endGame}>Check answers</button>
    </div>
  );
}
