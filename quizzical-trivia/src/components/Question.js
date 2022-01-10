export default function Question({ question, answers, handleClick }) {
  const elements = answers.map((answer) => (
    <button className="button" onClick={handleClick}>
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
