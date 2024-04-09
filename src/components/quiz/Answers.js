import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuizContext } from "#contexts/QuizContext";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";

const Answers = () => {
  const { state } = useQuizContext();

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
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 500,
                    color: "primary.main",
                  }}
                >
                  {questionIndex + 1}
                </Typography>
              </Divider>

              {question.image && (
                <CardMedia
                  component="img"
                  height="200"
                  image={question.image}
                  alt="Answer"
                  sx={{
                    mt: { xs: "6px", md: "16px" },
                    mb: { xs: "8px", md: "16px" },
                    objectFit: "contain",
                  }}
                />
              )}

              <Typography variant="body2" sx={{ mb: 4 }}>
                {question.question}
              </Typography>

              <Typography
                sx={{
                  color: yourAnswer === correctAnswer ? "green" : "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Your Answer: {yourAnswer}
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {" "}
                Correct Answer: {correctAnswer}{" "}
              </Typography>

              {question.correctAnswerExplanationImage && (
                <CardMedia
                  component="img"
                  height="200"
                  image={question.correctAnswerExplanationImage}
                  alt="Answer"
                  sx={{
                    mt: { xs: "6", md: "16px" },
                    mb: { xs: "-6px", md: "16px" },
                    objectFit: "contain",
                  }}
                />
              )}

              <Typography variant="body2" sx={{mt: 3, mb: 4 }} component="div">
                <div dangerouslySetInnerHTML={{ __html: question.correctAnswerExplanation }} />
              </Typography>
            </Box>
          );
        })}
    </React.Fragment>
  );
};

export default Answers;
