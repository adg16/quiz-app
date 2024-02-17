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

export default function Question() {
  const navigate = useNavigate();
  const submit = () => {
    // this.props.history.push('/userlist')
    alert("submitted");
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 1 min timer

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#fff" }}>
        <Box sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}>
          <Typography variant="h2">Quiz #1</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          <Card
            sx={{ display: "inline-block", maxWidth: 800, ml: "auto", mb: 3 }}
          >
            {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            /> */}
            <CardContent>
            <CountdownCircleTimer
                isPlaying
                size={70}
                strokeWidth={8}
                duration={10}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
              >
                {({ remainingTime }) => remainingTime}
                {/* {({ remainingTime, color }) => (
                <div className="time-wrapper">
                    <div className="time">{remainingTime}</div>
                    <div>seconds</div>
                </div>
                )} */}
              </CountdownCircleTimer>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 4 }}
              >
                Question 1/10
              </Typography>

              


              <Typography variant="body2" sx={{ mb: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                aliquet sodales erat, vel tincidunt risus volutpat ut. Sed at
                justo neque. Aliquam ut luctus mauris. Ut nisl magna, ultricies
                quis libero in, aliquam sodales eros.
              </Typography>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ minWidth: 200, color: "black", borderColor: "black" }}
                  >
                    a: Vestibulum
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ minWidth: 200, color: "black", borderColor: "black" }}
                  >
                    b: Accumsan{" "}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ minWidth: 200, color: "black", borderColor: "black" }}
                  >
                    c: Arcu{" "}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ minWidth: 200, color: "black", borderColor: "black" }}
                  >
                    d: Quisquam{" "}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
