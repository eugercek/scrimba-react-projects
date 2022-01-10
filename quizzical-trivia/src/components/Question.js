import { nanoid } from "nanoid";
import { useState } from "react";
import "./Question.css";

export default function Question({ question, answers, handleClick, selected }) {
  const elements = answers.map((answer, i) => (
    <button
      className={
        answer !== selected ? "question--button" : "question--button selected"
      }
      onClick={(e) => {
        handleClick(answer);
      }}
      key={nanoid()}
    >
      {answer}
    </button>
  ));

  return (
    <div className="question">
      <h4>{question}</h4>
      <div className="answers">{elements}</div>
      <hr />
    </div>
  );
}
