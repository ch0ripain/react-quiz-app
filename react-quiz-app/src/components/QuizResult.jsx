import QUESTIONS from "../util/questions";
import trophyImg from "../assets/trophy.jpg";
import silverTrophyImg from "../assets/silver-trophy.jpg";
import bronzeTrophyImg from "../assets/bronze-trophy.jpg";

import { useContext } from "react";
import { QuizContext } from "../store/quiz-answer-context";
import QuizUserAnswers from "./QuizUserAnswers";
import QuizUserAnswer from "./QuizUserAnswer";

export default function QuizResult() {
  const { answers } = useContext(QuizContext);

  let correctAnswers = 0;
  let skippedAnswers = 0;
  answers.forEach((answer, index) => {
    if (answer === QUESTIONS[index].answers[0]) {
      correctAnswers++;
    } else if (answer === "skipped") {
      skippedAnswers++;
    }
  });

  const incorrectAnswers = QUESTIONS.length - (correctAnswers + skippedAnswers);

  let imageTrophy = bronzeTrophyImg;
  let labelTrophy = "bronze";
  if (correctAnswers === answers.length) {
    imageTrophy = trophyImg;
    labelTrophy = "gold";
  } else if (incorrectAnswers <= 3 && skippedAnswers <= 3) {
    imageTrophy = silverTrophyImg;
    labelTrophy = "silver";
  }

  const questions = QUESTIONS.map((question) => question.text);

  return (
    <section className="bg-gradient-to-r from-fuchsia-500 to-cyan-500  rounded-3xl px-[10%] py-[7%] text-black min-h-96 flex flex-col items-center">
      <img
        src={imageTrophy}
        alt="trophy image"
        className=" mix-blend-multiply h-32 w-32 animate-bounce"
      />
      <h1 className="uppercase text-5xl font-gamer">
        ¡Completed - {labelTrophy}!
      </h1>
      <h2 className="uppercase text-2xl font-gamer text-balance">
        STATS: {correctAnswers} correct - {incorrectAnswers} incorrect -{" "}
        {skippedAnswers} skipped
      </h2>
      <QuizUserAnswers>
        <QuizUserAnswer questions={questions} answers={answers} />
      </QuizUserAnswers>
    </section>
  );
}
