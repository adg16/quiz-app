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
import { useQuizContext } from '#contexts/QuizContext';
import Question from "./Question";
import Answer from "./Answer";


export default function Quiz() {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();
  const submit = () => {
    // navigate("/answer");
  };

 
  useEffect(() => {
    if (Object.keys(state.currentQuiz).length === 0) {
      navigate("/quizzes");
    }
    console.log('QUIZ STATE', state);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#FFF9C4" }}>
        <Box sx={{ textAlign: "center", paddingTop: 2, paddingBottom: 2 }}>
          <Typography variant="h5">{state.currentQuiz.title}</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          <Card
            elevation={10}
            sx={{
              display: "inline-block",
              maxWidth: 800,
              ml: "auto",
              mb: 3,
              pl: "16px",
              pr: "16px",
              pt: "10px",
            }}
          >
            <CardContent>
              <Question />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
