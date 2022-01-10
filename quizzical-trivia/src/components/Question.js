import { nanoid } from "nanoid";
export default function Question({ question, answers, handleClick }) {
  const elements = answers.map((answer) => (
    <button
      className="button"
      onClick={(e) => handleClick(answer)}
      key={nanoid()}
    >
      {answer}
    </button>
  ));

  return (
    <div className="question">
      <h4>{question}</h4>
      <div className="answers">{elements}</div>
    </div>
  );
}
