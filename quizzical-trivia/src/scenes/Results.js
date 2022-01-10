import Question from "../components/Question";
import { nanoid } from "nanoid";
import "./Results.css";

export default function Results({
  questions,
  results: { correct, wrong, empty },
  selections,
}) {
  const elements = questions.map((question, i) => (
    <Question
      key={nanoid()}
      question={question.question}
      answers={[question.correct_answer, ...question.incorrect_answers]}
      selected={selections[i]}
      correct_answer={question.correct_answer}
      isResult={true}
    />
  ));
  return (
    <main className="playing">
      {elements}
      <h3>
        You scored {correct}/{correct + empty + wrong}
      </h3>
      <button className="results--button btn-dark">Play again</button>
    </main>
  );
}
