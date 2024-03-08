import * as React from "react";
import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import IconButton from "@mui/material/IconButton";
import { useQuizContext } from "#contexts/QuizContext";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const { state } = useQuizContext();
  const navigate = useNavigate();
  const goToQuizList = () => {
    navigate("/quizzes");
  };

  useEffect(() => {
    if (Object.keys(state.currentQuiz).length === 0) {
      navigate("/quizzes");
    }
  }, [state]);

  return (
    <React.Fragment>
      <CssBaseline />
      <IconButton
        onClick={() => goToQuizList()}
        aria-label="Quizzes"
        sx={{
          color: "#fff",
          borderColor: "#33a474",
          backgroundColor: "#33a474",
          position: "fixed",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
          margin: "8px",
          "&:hover": {
            backgroundColor: "#2d7a5e",
            borderColor: "#2d7a5e",
          },
        }}
      >
        <ViewListIcon sx={{ color: "#fff", fontSize: "40px" }} />
      </IconButton>
      <Container maxWidth={false}>
        <Box sx={{ textAlign: "center", paddingTop: 2, paddingBottom: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "30px", sm: "35px", md: "40px" },
              fontWeight: 400,
              color: 'primary.main'
            }}
          >
            {state.currentQuiz.title}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5}}>
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
              {!state.answerSubmitted &&
              state.totalAnsweredQuestions === state.totalQuestions ? (
                <Result />
              ) : (
                <Question />
              )}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
