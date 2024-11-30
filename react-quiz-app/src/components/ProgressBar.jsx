import { useEffect, useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../store/quiz-answer-context";

export default function ProgressBar({ max, onChangeQuestion, onSelectAnswer }) {
  const [progressValue, setProgressValue] = useState(max);

  const { updateAnswers } = useContext(QuizContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prevProgressValue) => {
        if (onSelectAnswer !== null) {
          return 0.1;
        } else {
          return prevProgressValue - 10;
        }
      });
    }, 10);

    if (progressValue <= 0) {
      clearInterval(interval);
      onChangeQuestion();
      updateAnswers("skipped");
    }

    return () => {
      clearInterval(interval);
    };
  }, [progressValue, onChangeQuestion, onSelectAnswer, max, updateAnswers]);

  return (
    <progress
      className={`w-[100%] ${
        onSelectAnswer !== null ? "selected animate-pulse" : undefined
      }`}
      max={max}
      value={progressValue}
    />
  );
}
