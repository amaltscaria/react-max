import { useRef } from "react";
import QUESTIONS from "../questions";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let classes = "";
        if (
          answerState === "answered" &&
          selectedAnswer === answer
        ) {
          classes = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          selectedAnswer === answer
        ) {
          classes = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              className={classes}
              onClick={() => onSelect(answer)}
              disabled={answerState!==''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
