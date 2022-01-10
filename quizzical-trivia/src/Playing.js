import Question from "./components/Question";

export default function Playing({ questions }) {
  console.log(questions);
  const elements = questions.map((q) => (
    <Question
      question={q.question}
      answers={[q.correct_answer, ...q.incorrect_answers]}
      handleClick={() => console.log(q.correct_answer)}
    />
  ));
  return <div className="playing">{elements}</div>;
}
