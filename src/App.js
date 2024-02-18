import logo from './logo.svg';
import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizList from "./pages/QuizList";
import Quiz from "./pages/quiz/Quiz";
import Question from "./pages/Question";
import Answer from "./pages/Answer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

