import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useQuizContext } from "#contexts/QuizContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Zoom from "@mui/material/Zoom";
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

const renderTime = (remainingTime) => {
  return (
    <div>
      {remainingTime === 0 ? (
        <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}>
          Time's Up!
        </Typography>
      ) : (
        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
          {remainingTime}
        </Typography>
      )}
    </div>
  );
};

export default function Question() {
  const { state, dispatch } = useQuizContext();

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
    let buttonText = "Next Question";
    if (state.totalQuestions === state.totalAnsweredQuestions) {
      buttonText = "See Results";
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
            marginTop: "20px",
            height: "60px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
            borderRadius: "30px",
            color: "#fff",
            borderColor: "#33a474",
            backgroundColor: "#33a474",
            "&:hover": {
              backgroundColor: "#2d7a5e",
              borderColor: "#2d7a5e",
            },
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
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "primary.main" }}
          >
            Question {state.currentQuestionIndex + 1} of {state.totalQuestions}
          </Typography>
        </Grid>
      </Grid>

      {state.currentQuestion.image && (
        <CardMedia
          component="img"
          height="200"
          image={state.currentQuestion.image}
          alt="Question"
          sx={{ 
            mt: {xs: '-40px', md: '16px'}, 
            mb: {xs: '-50px', md: '16px'}, 
            objectFit: "contain" 
          }}
        />
      )}

      <Typography
        variant="body2"
        sx={{ mt: 3, mb: 4, fontWeight: "500", fontSize: "14px", fontStyle: "italic" }}
      >
        {state.currentQuestion.question}
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Object.keys(state.currentQuestion).length > 0 &&
          state.currentQuestion.choices.map((choice) => {
            let choiceCursor = "pointer";
            let choiceColor = "#4298b4";
            let choiceBorderColor = "#4298b4";
            let hoverBackgroundColor = "#d9eaf0";
            let hoverBorderColor = "#4298b4";

            if (state.answerSubmitted) {
              choiceCursor = "default";
              choiceColor = "#CCCCCC";
              choiceBorderColor = "#CCCCCC";
              hoverBackgroundColor = "inherit";
              hoverBorderColor = "inherit";

              if (choice.id === state.currentQuestion.correctAnswer) {
                choiceColor = "green";
                choiceBorderColor = "green";
              }

              if (
                choice.id !== state.currentQuestion.correctAnswer &&
                choice.id === state.currentSubmittedAnswer
              ) {
                choiceColor = "red";
                choiceBorderColor = "red";
              }
            }

            return (
              <Grid key={choice.id} item xs={12} md={6}>
                <Button
                  onClick={() => submitAnswer(choice.id)}
                  variant="outlined"
                  size="large"
                  disableRipple={state.answerSubmitted}
                  sx={{
                    position: "relative",
                    minWidth: 230,
                    borderRadius: 20,
                    borderWidth: 2,
                    color: choiceColor,
                    borderColor: choiceBorderColor,
                    cursor: choiceCursor,
                    "&:hover": {
                      borderWidth: 2,
                      backgroundColor: hoverBackgroundColor,
                      borderColor: hoverBorderColor,
                    },
                  }}
                >
                  {choice.id}: {choice.value}
                  {choice.id === state.currentSubmittedAnswer && (
                    <Zoom
                      in={state.answerSubmitted}
                      style={{
                        transitionDelay: state.answerSubmitted
                          ? "300ms"
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

      {!state.answerSubmitted && (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "12px",
                "@media screen and (max-width: 576px)": {
                  marginTop: "12px",
                },
              }}
            >
              <CountdownCircleTimer
                key={state.currentQuestionIndex}
                isPlaying={!state.answerSubmitted}
                size={70}
                strokeWidth={4}
                duration={10}
                colors={["#33a474", "#F7B801", "#ff1919", "#FF0000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={(totalElapsedTime) => submitAnswer("x")}
              >
                {({ remainingTime, color }) => (
                  <span style={{ color }}>{renderTime(remainingTime)}</span>
                )}
              </CountdownCircleTimer>
            </Box>
          </Grid>
        </Grid>
      )}

      <Zoom
        in={state.answerSubmitted}
        style={{
          transitionDelay: state.answerSubmitted ? "600ms" : "0ms",
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
