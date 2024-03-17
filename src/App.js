import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "#components/Home";
import QuizList from "#components/QuizList";
import Quiz from "#components/quiz/Quiz";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
