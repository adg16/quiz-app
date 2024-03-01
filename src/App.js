import logo from './logo.svg';
import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "#components/Home";
import QuizList from "#components/QuizList";
import Quiz from "#components/quiz/Quiz";
import Answer from "#components/quiz/Answer";

// import Question from "./pages/Question";
// import Answer from "#components/Answer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="/answer" element={<Answer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

