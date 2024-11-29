import { createContext, useState } from "react";

export const QuizContext = createContext({
  answers: [],
  updateAnswers: () => {},
});

export default function QuizContextProvider({ children }) {
  const [answers, setAnswers] = useState([]);

  function handleUpdateAnswers(answer) {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  }

  const ctxValue = {
    answers: answers,
    updateAnswers: handleUpdateAnswers,
  };
  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}
