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
import quizzes from "#data/quizzes.json";
import { useQuizContext } from "#contexts/QuizContext";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

export default function QuizList() {
  const { dispatch } = useQuizContext();
  const navigate = useNavigate();

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
      <Container maxWidth={false}>
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
                ":hover": {
                  boxShadow: 20,
                },
              }}
              key={quiz.id}
            >
              <CardActionArea onClick={() => startTheQuiz(quiz)} sx={{}}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "primary.main" }}
                  >
                    {quiz.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                    {quiz.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
