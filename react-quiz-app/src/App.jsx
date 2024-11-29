import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

import QuizContextProvider from "./store/quiz-answer-context";

function App() {
  return (
    <QuizContextProvider>
      <main>
        <Header />
        <Quiz />
      </main>
    </QuizContextProvider>
  );
}

export default App;
