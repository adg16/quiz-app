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

export default function Question(question, totalQuestions, totalQuestionsAnswered) {
  const navigate = useNavigate();

  console.log(' Question question', question);
  console.log(' Question totalQuestions', totalQuestions);
  console.log(' Question totalQuestionsAnswered', totalQuestionsAnswered);

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
            Question {totalQuestionsAnswered} of {totalQuestions}

          </Typography>
        </Grid>

        {/* <Grid item xs={12} sm={4}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 1, mt: 1 }}
              >
                Score: 0
              </Typography>
              </Grid> */}
      </Grid>

      <CardMedia
        component="img"
        height="200"
        image="/images/placeholder_600x200.png"
        alt="green iguana"
        sx={{ mt: 2, mb: 2, objectFit: "contain" }}
      />

      <Typography variant="body2" sx={{ mb: 4 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet
        sodales erat, vel tincidunt risus volutpat ut. Sed at justo neque.
        Aliquam ut luctus mauris. Ut nisl magna, ultricies quis libero in,
        aliquam sodales eros.
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
