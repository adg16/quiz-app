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
import { useNavigate } from "react-router-dom";
import quizzes from "#data/quizzes.json";
import { useQuizContext } from '#contexts/QuizContext';

export default function QuizList() {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();
  const startTheQuiz = (quiz) => {
    dispatch({ type: 'START_THE_QUIZ', payload: {quiz:quiz} });
    navigate("/quiz");
  };

  useEffect(() => {
    dispatch({ type: 'RESET_THE_QUIZ' });
  }, []);

  console.log(quizzes);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#FFF9C4" }}>
        <Box sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}>
          <Typography variant="h2">Available Quizzes</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          {quizzes.map((quiz) => (
            <Card
              elevation={10}
              sx={{
                display: "inline-block",
                maxWidth: 800,
                ml: "auto",
                mb: 3,
                p: 1,
              }}
              key={quiz.id}
            >
              <CardActionArea onClick={() => startTheQuiz(quiz)}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {quiz.title}
                  </Typography>
                  <Typography variant="body2" sx={{fontStyle:"italic"}}>{quiz.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
