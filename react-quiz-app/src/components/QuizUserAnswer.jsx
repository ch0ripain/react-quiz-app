import QUESTIONS from "../util/questions";

export default function QuizUserAnswer({ questions, answers }) {
  return (
    <>
      {questions.map((question, questionIndex) => {
        let cssAnswer = "text-stone-500";
        if (answers[questionIndex] === QUESTIONS[questionIndex].answers[0]) {
          cssAnswer = "text-green-500 font-bold";
        } else if (
          answers[questionIndex] !== QUESTIONS[questionIndex].answers[0] &&
          answers[questionIndex] !== "skipped"
        ) {
          cssAnswer = "text-red-500 font-bold";
        }
        return (
          <article
            key={questionIndex}
            className="flex p-3 bg-gray-200 items-center space-x-2"
          >
            <p className="rounded-full px-3 py-1 bg-black text-white">
              {questionIndex + 1}
            </p>
            <div className=" flex flex-col space-y-1 content-center w-[100%] text-pretty">
              <strong className="">{question}</strong>
              <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              <p className={cssAnswer}>{answers[questionIndex]}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
