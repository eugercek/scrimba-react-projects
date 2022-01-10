import Question from "./components/Question";
import { nanoid } from "nanoid";

export default function Results({
  questions,
  results: { correct, wrong, empty },
}) {
  const elements = questions.map((question, i) => (
    <Question
      key={nanoid()}
      question={question.question}
      answers={[question.correct_answer, ...question.incorrect_answers]}
    />
  ));
  return (
    <div className="playing">
      {elements}
      <h3>
        You scored {correct}/{correct + empty + wrong}
      </h3>
      <button>Play again</button>
    </div>
  );
}
