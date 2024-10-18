import { useState, useCallback, useRef } from "react";
// import quizCompleted from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
// import QuestionTimer from "./QuestionTimer";
// import Answers from "./Answers";
import Question from "./Question";
import Summary from "./Summary";

export const Quiz = () => {
  //   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  //  No need to manage an extra state, active question Index can be dervied from the number of answers given till now
  // Meaning 2 answers in the answers array, we have to display the 3rd question.
  const [userAnswers, setUserAnswers] = useState([]);

  //   const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(
    (answer) => {
      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    //   setTimeout(() => {
    //     if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
    //       setAnswerState("correct");
    //     } else {
    //       setAnswerState("wrong");
    //     }
    //     setTimeout(() => {
    //       setAnswerState("");
    //     }, 2000);
    //   }, 1000);
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers}></Summary>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        // questionText={QUESTIONS[activeQuestionIndex].text}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}
        // answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
};

export default Quiz;
