import { nanoid } from "nanoid";
import "./Question.css";

const decode = (string) =>
  string.replaceAll("&quot;", '"').replaceAll("&#039;", "'");

export default function Question({
  question,
  answers,
  handleClick,
  selected,
  isResult,
  correct_answer,
}) {
  function getClassName(answerOfButton) {
    if (isResult) {
      // Show if selected answer is wrong
      if (answerOfButton === selected && answerOfButton !== correct_answer) {
        return "false not-true";
      } else if (answerOfButton === correct_answer) {
        return "true";
      } else {
        // Everything else is unnecessary
        return "not-true";
      }
    }

    // Either selected or not selected in playing scene
    return answerOfButton === selected ? "selected" : "";
  }

  const elements = answers.map((answer, i) => (
    <button
      className={`question--button ${getClassName(answer)}`}
      onClick={(e) => {
        handleClick(answer);
      }}
      key={nanoid()}
    >
      {decode(answer)}
    </button>
  ));
  return (
    <div className="question">
      <h4>{decode(question)}</h4>
      <div className="answers">{elements}</div>
      <hr />
    </div>
  );
}
