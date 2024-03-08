import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuizContext } from "#contexts/QuizContext";
import ConfettiExplosion from "react-confetti-explosion";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";

const Answers = () => {
  const { state, dispatch } = useQuizContext();

  useEffect(() => {
    console.log("ANSWERS STATE", state);
  }, []);

  const findValueById = (id, array) => {
    const val = array.find((el) => el.id === id);
    return val ? val.value : null;
  };

  return (
    <React.Fragment>
      {Object.keys(state.currentQuestion).length > 0 &&
        state.currentQuiz.questions.map((question, questionIndex) => {
          const yourAnswer = findValueById(
            state.submittedAnswers[questionIndex].answer,
            question.choices
          );
          const correctAnswer = findValueById(
            question.correctAnswer,
            question.choices
          );
          return (
            <Box key={questionIndex}>
              <Divider sx={{ mt: "30px", mb: "25px" }} textAlign="left">
                <Typography sx={{ fontSize: "30px" }}>
                  {questionIndex + 1}
                </Typography>
              </Divider>

              <CardMedia
                component="img"
                height="200"
                image={question.image}
                alt="green iguana"
                sx={{ mt: 2, mb: 2, objectFit: "contain" }}
              />

              <Typography variant="body2" sx={{ mb: 4 }}>
                {question.question}
              </Typography>

              <Typography
                sx={{ color: yourAnswer === correctAnswer ? "green" : "red", fontWeight:'bold' }}
              >
                Your Answer: {yourAnswer}
              </Typography>
              <Typography> Correct Answer: {correctAnswer} </Typography>

              <CardMedia
                component="img"
                height="200"
                image={question.correctAnswerExplanationImage}
                alt="green iguana"
                sx={{ mt: 2, mb: 2, objectFit: "contain" }}
              />

              <Typography variant="body2" sx={{ mb: 4 }}>
                {question.correctAnswerExplanation}
              </Typography>
            </Box>
          );
        })}
    </React.Fragment>
  );
};

export default Answers;
