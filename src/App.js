import logo from './logo.svg';
import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizList from "./pages/QuizList";
import Question from "./pages/Question";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

