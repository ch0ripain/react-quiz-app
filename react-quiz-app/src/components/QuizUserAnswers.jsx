export default function QuizUserAnswers({ children }) {
  return (
    <section className="bg-gradient-to-r from-fuchsia-600 to-pink-600 py-4 px-4 w-[100%] rounded-xl mt-5 text-center">
      <h1 className="uppercase text-5xl font-gamer">Watch your answers!</h1>
      <hr className="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className=" flex flex-col gap-y-5">{children}</div>
    </section>
  );
}
