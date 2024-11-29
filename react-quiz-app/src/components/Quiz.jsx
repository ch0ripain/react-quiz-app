import { useCallback, useState } from "react";
import QUESTIONS from "../util/questions";
import ProgressBar from "./ProgressBar";
import QuizAnswer from "./QuizAnswer";
import QuizResult from "./QuizResult";

const TIMER = 10000;

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [isAnswerSelected, setIsAnswerSelected] = useState(null);

  const updateQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }, []);

  if (currentQuestionIndex > QUESTIONS.length - 1) {
    return <QuizResult />;
  }

  const activeCorrectAnswer = QUESTIONS[currentQuestionIndex].answers[0];
  const activeQuestion = QUESTIONS[currentQuestionIndex];
  let activeAnswers = [...QUESTIONS[currentQuestionIndex].answers];

  activeAnswers.sort();

  function handleUserAnswer(answerIndex) {
    setIsAnswerSelected(answerIndex);
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswerSelected(null);
    }, 2000);
  }

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex flex-col gap-y-10 px-32 py-16">
      <ProgressBar
        key={currentQuestionIndex}
        max={TIMER}
        onChangeQuestion={updateQuestion}
        onSelectAnswer={isAnswerSelected}
      />

      <QuizAnswer
        activeQuestion={activeQuestion}
        activeAnswers={activeAnswers}
        isAnswerSelected={isAnswerSelected}
        activeCorrectAnswer={activeCorrectAnswer}
        onUserAnswer={handleUserAnswer}
        currentIndexQuestion={currentQuestionIndex}
      />
    </section>
  );
}