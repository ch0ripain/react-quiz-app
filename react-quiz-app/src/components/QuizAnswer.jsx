import { useContext } from "react";
import { QuizContext } from "../store/quiz-answer-context";

export default function QuizAnswer({
  activeQuestion,
  activeAnswers,
  isAnswerSelected,
  activeCorrectAnswer,
  onUserAnswer,
  currentIndexQuestion,
}) {
  const { updateAnswers } = useContext(QuizContext);

  function handleUserAnswer(answer, answerIndex) {
    updateAnswers(answer);
    onUserAnswer(answerIndex);
  }

  return (
    <>
      <strong className="text-white bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 rounded-full min-h-10 p-2 content-center uppercase text-center">
        {`${currentIndexQuestion + 1}/${7}` + " - ¿" + activeQuestion.text}
      </strong>
      <div className="flex flex-col gap-y-5">
        {activeAnswers.map((answer, answerIndex) => {
          let cssAnswerBg = "bg-gradient-to-r from-blue-800 to-indigo-900 ";
          if (
            isAnswerSelected == answerIndex &&
            answer === activeCorrectAnswer
          ) {
            cssAnswerBg = " bg-green-500 animate-pulse";
          } else if (
            isAnswerSelected == answerIndex &&
            answer !== activeCorrectAnswer
          ) {
            cssAnswerBg = " bg-red-500 animate-pulse";
          }
          let cssAnswer = `text-white text-center text-balance content-center min-h-14 rounded-full p-2 ${cssAnswerBg}`;
          return (
            <button
              key={[answer, answerIndex]}
              className={cssAnswer}
              onClick={() => handleUserAnswer(answer, answerIndex)}
              disabled={isAnswerSelected !== null}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </>
  );
}
