import * as React from "react";
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
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ImageIcon from "@mui/icons-material/Image";
import { useQuizContext } from "#contexts/QuizContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Zoom from "@mui/material/Zoom";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Answer from "./Answer";

const CheckMark = React.forwardRef(function (props, ref) {
  return (
    <div ref={ref} {...props}>
      <CheckIcon sx={{ color: "green", fontSize: "40px" }} />
    </div>
  );
});

const CrossMark = React.forwardRef(function (props, ref) {
  return (
    <div ref={ref} {...props}>
      <CloseIcon sx={{ color: "red", fontSize: "40px" }} />
    </div>
  );
});

export default function Question() {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();

  const submitAnswer = (answer) => {
    if (!state.answerSubmitted) {
      dispatch({
        type: "SUBMIT_THE_ANSWER",
        payload: { sumbmittedAnswer: answer },
      });
    }
  };

  const next = () => {
    console.log("GO TO NEXT QUESTION");
    if (state.totalQuestions === state.totalAnsweredQuestions) {
      dispatch({
        type: "VIEW_FINAL_SCORE",
      });
    } else {
      dispatch({
        type: "MOVE_TO_THE_NEXT_QUESTION",
      });
    }
  };

  const NextButton = React.forwardRef(function (props, ref) {
    let buttonText = "Proceed to the next question";
    if (state.totalQuestions === state.totalAnsweredQuestions) {
      buttonText = "View the final score";
    }

    return (
      <div ref={ref} {...props}>
        <Button
          onClick={() => next()}
          variant="contained"
          size="large"
          sx={{
            position: "relative",
            minWidth: 230,
            color: "white",
            borderColor: "black",
            marginTop: "20px",
          }}
          endIcon={<ArrowForwardIosIcon />}
        >
          {buttonText}
        </Button>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CountdownCircleTimer
              isPlaying={state.currentSubmittedAnswer === null ? true : false}
              size={60}
              strokeWidth={4}
              duration={10}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[7, 5, 2, 0]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ mb: 1, mt: 1 }}
          >
            Question {state.currentQuestionIndex + 1} of {state.totalQuestions}
          </Typography>
        </Grid>
      </Grid>

      <CardMedia
        component="img"
        height="200"
        image={state.currentQuestion.image}
        alt="green iguana"
        sx={{ mt: 2, mb: 2, objectFit: "contain" }}
      />

      <Typography variant="body2" sx={{ mb: 4 }}>
        {state.currentQuestion.question}
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Object.keys(state.currentQuestion).length > 0 &&
          state.currentQuestion.choices.map((choice) => {
            let choiceColor = "black";
            let choiceCursor = "pointer";

            if (state.answerSubmitted) {
              choiceCursor = "default";

              if (choice.id === state.currentQuestion.correctAnswer) {
                choiceColor = "green";
              }

              if (
                choice.id !== state.currentQuestion.correctAnswer &&
                choice.id === state.currentSubmittedAnswer
              ) {
                choiceColor = "red";
              }
            }

            return (
              <Grid key={choice.id} item xs={12} md={6}>
                <Button
                  onClick={() => submitAnswer(choice.id)}
                  variant="outlined"
                  size="large"
                  sx={{
                    position: "relative",
                    minWidth: 230,
                    color: choiceColor,
                    borderColor: choiceColor,
                    cursor: choiceCursor,
                  }}
                >
                  {choice.id}: {choice.value}
                  {choice.id === state.currentSubmittedAnswer && (
                    <Zoom
                      in={state.answerSubmitted}
                      style={{
                        transitionDelay: state.answerSubmitted
                          ? "500ms"
                          : "0ms",
                        position: "absolute",
                        top: 0,
                        left: -40,
                      }}
                    >
                      {choice.id === state.currentQuestion.correctAnswer ? (
                        <CheckMark />
                      ) : (
                        <CrossMark />
                      )}
                    </Zoom>
                  )}
                </Button>
              </Grid>
            );
          })}
      </Grid>

      <Zoom
        in={state.answerSubmitted}
        style={{
          transitionDelay: state.answerSubmitted ? "500ms" : "0ms",
        }}
      >
        <NextButton />
      </Zoom>

      {state.answerSubmitted && (
        <Zoom
          in={state.answerSubmitted}
          style={{
            transitionDelay: state.answerSubmitted ? "500ms" : "0ms",
          }}
        >
          <Answer />
        </Zoom>
      )}
    </React.Fragment>
  );
}
