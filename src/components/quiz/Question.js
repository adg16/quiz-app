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
import { useQuizContext } from '#contexts/QuizContext';


export default function Question() {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();

  const submit = () => {
    // this.props.history.push('/userlist')
    navigate("/answer");
  };

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
              isPlaying
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
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            size="large"
            sx={{ minWidth: 200, color: "black", borderColor: "black" }}
            onClick={submit}
          >
            a: Vestibulum
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            size="large"
            sx={{ minWidth: 200, color: "black", borderColor: "black" }}
          >
            b: Accumsan{" "}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            size="large"
            sx={{ minWidth: 200, color: "black", borderColor: "black" }}
          >
            c: Arcu{" "}
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant="outlined"
            size="large"
            sx={{ minWidth: 200, color: "black", borderColor: "black" }}
          >
            d: Quisquam{" "}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
