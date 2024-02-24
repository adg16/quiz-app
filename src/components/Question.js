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

export default function Question() {
  const navigate = useNavigate();

  const submit = () => {
    // this.props.history.push('/userlist')
    navigate("/answer");
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 1 min timer

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#fff" }}>
        <Box sx={{ textAlign: "center", paddingTop: 2, paddingBottom: 2 }}>
          <Typography variant="h2">Quiz #1</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          <Card
            elevation={10}
            sx={{
              display: "inline-block",
              maxWidth: 800,
              ml: "auto",
              mb: 3,
              p: 2,
            }}
          >
            <CardContent>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
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
                    Question 1 of 10
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
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
