import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "#components/Home";
import QuizList from "#components/QuizList";
import Quiz from "#components/quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
