import { ConnectingAirportsOutlined } from "@mui/icons-material";
import * as React from "react";
import { createContext, useContext, useReducer } from "react";

// Create a context to hold the state
const QuizContext = createContext();

// Define the initial state
const initialState = {
  currentQuiz: {},
  totalQuestions: 0,
  currentQuestionIndex: 0,
  currentQuestion: {},
  totalAnsweredQuestions: 0,
  totalCorrectAnswers: 0,
};

// Define the reducer function to handle state transitions
const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "START_THE_QUIZ":
      return {
        ...state,
        currentQuiz: action.payload.quiz,
        totalQuestions: action.payload.quiz.questions.length,
        currentQuestionIndex: state.currentQuestionIndex,
        currentQuestion:
          action.payload.quiz.questions[state.currentQuestionIndex],
        totalAnsweredQuestions: state.totalAnsweredQuestions,
        totalCorrectAnswers: state.totalCorrectAnswers,
      };
    case "SUBMIT_THE_ANSWER":
      const totalCorrectAnswers = () => {
        if (
          action.payload.sumbmittedAnswer ===
          state.currentQuestion.correctAnswer
        ) {
          return state.totalCorrectAnswers + 1;
        }

        return state.totalCorrectAnswers;
      };

      return {
        ...state,
        totalAnsweredQuestions: state.totalAnsweredQuestions + 1,
        totalCorrectAnswers: totalCorrectAnswers(),
      };
    case "MOVE_TO_THE_NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currentQuestion:
          action.payload.currentQuiz.questions[state.currentQuestionIndex + 1],
      };
    default:
      return state;
  }
};

// Create a component that will provide the context
// IncrementProvider takes in an argument called children
export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // In this return value, we passed-in children as the CONSUMER of the PROVIDER
  // This will able children components to access the data inside the context
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

// Create a function that invokes the context
export const useQuizContext = () => {
  return useContext(QuizContext);
};
