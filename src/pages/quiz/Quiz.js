import * as React from "react";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ImageIcon from "@mui/icons-material/Image";
import Question from "./Question"

export default function Quiz() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [currentQuiz, setCurrentQuiz] = useState({});
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const { userAnswers, setUserAnswers } = useState({});


  //TODO: pass state to Question

  useEffect(() => {
    if (state === null) {
      navigate("/quizzes");
    } else {
        const { quiz } = state;
        setCurrentQuiz(quiz);
        // setTotalQuestions(Object.keys(quiz.questions).length);
        setTotalQuestions(1);

        console.log('quiz.questions', quiz.questions);
        setCurrentQuestionId(1);
        setCurrentQuestion(findQuestionById(1, quiz));
        setTotalQuestionsAnswered(1);
    }
  }, []);

//   useEffect(() => {
//     setCurrentQuestion(findQuestionById(currentQuestionId));
//   }, [currentQuestionId]);

  if (state === null) {
    return null;
  }

// / const { quiz } = state;

  console.log("currentQuiz", currentQuiz);

  const findQuestionById = (questionId, quiz) => {
    for (const question of quiz.questions) {
      if (question.id === questionId) {
        return question;
      }
    }
    return null; // Question not found
  };

  const submit = () => {
    // navigate("/answer");
  };

  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#fff" }}>
        <Box sx={{ textAlign: "center", paddingTop: 2, paddingBottom: 2 }}>
          <Typography variant="h2">{currentQuiz.title}</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          <Card
            elevation={10}
            sx={{
              display: "inline-block",
              maxWidth: 800,
              ml: "auto",
              mb: 3,
              p: 2,
            }}
          >
            <CardContent>
                <Question question={currentQuestion} totalQuestions={totalQuestions} totalQuestionsAnswered={totalQuestionsAnswered}/>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
