import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuizContext } from "#contexts/QuizContext";
import ConfettiExplosion from "react-confetti-explosion";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";


const Score = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useQuizContext();
  const [progressValue, setProgressValue] = useState(0);
  const stopAt = (state.totalCorrectAnswers / state.totalQuestions) * 100;

  useEffect(() => {
    console.log("SCORE STATE", state);
  }, []);

  const congratulate = () => {
    if (state.totalCorrectAnswers > 0) {
      dispatch({
        type: "CONGRATULATE",
      });
    }
  };

  const retakeTheQuiz = () => {
    dispatch({ type: 'RETAKE_THE_QUIZ'});
    // dispatch({ type: 'START_THE_QUIZ', payload: {quiz:state.currentQuiz} });
  };

  const takeAnotherQuiz = () => {
    navigate('/quizzes')
  };

  useEffect(() => {
    let interval;
    if (progressValue < stopAt) {
      interval = setInterval(() => {
        setProgressValue((prevValue) => {
          const newValue = prevValue + 1;
          return newValue > stopAt ? stopAt : newValue;
        });
      }, 5);
    } else {
      congratulate();
    }
    return () => {
      clearInterval(interval);
    };
  }, [progressValue, stopAt]);

  return (
    <>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        {state.congratulate && (
          <ConfettiExplosion duration={5000} particleCount={stopAt} />
        )}

        {/* Actual CircularProgress (blue) */}
        <CircularProgress
          variant="determinate"
          value={progressValue}
          size={250}
          thickness={3}
          sx={{ color: "#004777", zIndex: 1 }}
        />
        {/* Trail CircularProgress (gray) */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={250}
          thickness={3}
          sx={{ color: "lightgray", position: "absolute", zIndex: 0 }}
        />
        {/* Congrats badge */}
        {state.congratulate && (
          <Box
            sx={{
              position: "absolute",
              top: "0%", // Adjust top position to move the badge above the circle
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              backgroundColor: "#004777",
              color: "white",
              padding: "5px 20px", // Adjust padding to define the rectangle shape
              borderRadius: "5px", // Add border radius for rounded corners
              zIndex: 2, // Ensure the badge is above the CircularProgress
            }}
          >
            <Typography variant="h6" component="div">
              Congrats!
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            color="#004777"
            sx={{ fontSize: "40px", fontWeight: "bold" }}
          >
            {Math.ceil((progressValue / 100) * state.totalQuestions)}/
            {state.totalQuestions}
          </Typography>
          {/* <Typography variant="h6" component="div" sx={{fontSize: '16px'}}>
            {progressValue}%
        </Typography> */}
        </Box>
      </Box>

      <Box >
      <Button
        onClick={() => retakeTheQuiz()}
        variant="contained"
        size="large"
        sx={{
          minWidth: 230,
          color: "white",
          borderColor: "black",
          marginTop: "50px",
          marginRight: "5px",
          marginLeft: "5px",
          height: "65px",
          backgroundColor: "#004777",
        }}
        endIcon={<ReplayIcon />}
      >
        Retake The Quiz
      </Button>

      <Button
        onClick={() => takeAnotherQuiz()}
        variant="contained"
        size="large"
        sx={{
          minWidth: 230,
          color: "white",
          borderColor: "black",
          marginTop: "50px",
          marginRight: "5px",
          marginLeft: "5px",
          height: "65px",
          backgroundColor: "#004777",
        }}
        endIcon={<ArrowForwardIosIcon />}
      >
        Take Another Quiz
      </Button>
      </Box >
    </>
  );
};

export default Score;
