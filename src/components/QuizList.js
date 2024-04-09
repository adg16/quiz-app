import * as React from "react";
import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "#contexts/QuizContext";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import quiz1 from "#data/quiz_1.json";
import quiz2 from "#data/quiz_2.json";
import quiz3 from "#data/quiz_3.json";
import Grid from "@mui/material/Grid";

export default function QuizList() {
  const { dispatch } = useQuizContext();
  const navigate = useNavigate();

  const quizzes = [quiz1, quiz2, quiz3];

  const goToHome = () => {
    navigate("/");
  };

  const startTheQuiz = (quiz) => {
    dispatch({ type: "START_THE_QUIZ", payload: { quiz: quiz } });
    navigate("/quiz");
  };

  useEffect(() => {
    dispatch({ type: "RESET_THE_QUIZ" });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <IconButton
        onClick={() => goToHome()}
        aria-label="Home"
        sx={{
          color: "#fff",
          borderColor: "primary.main",
          backgroundColor: "primary.main",
          position: "fixed",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
          margin: "8px",
          "&:hover": {
            backgroundColor: "primary.mainDark",
            borderColor: "primary.mainDark",
          },
        }}
      >
        <HomeIcon sx={{ color: "#fff", fontSize: "40px" }} />
      </IconButton>
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            paddingTop: "40px",
            paddingBottom: "25px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "30px", sm: "35px", md: "40px" },
              fontWeight: 400,
              color: "primary.main",
            }}
          >
            Available Quizzes
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {quizzes.map((quiz) => (
            <Grid item key={quiz.id} xs={12} sm={12}>
              <Card
                elevation={10}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  ":hover": {
                    boxShadow: 20,
                  },
                }}
              >
                <CardActionArea onClick={() => startTheQuiz(quiz)}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "primary.main", textAlign: "center" }}
                    >
                      {quiz.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic", textAlign: "center" }}>
                      {quiz.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
