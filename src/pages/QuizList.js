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
import { useNavigate } from "react-router-dom";

export default function QuizList() {
  const navigate = useNavigate();
  const startTheQuiz = () => {
    // alert('start the quiz');
    navigate("/quiz");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#fff" }}>
        <Box sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}>
          <Typography variant="h2">Available Quizzes</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          <Card sx={{ display: "inline-block", maxWidth: 800, ml: "auto", mb: 3}}>
            <CardActionArea  onClick={startTheQuiz}>
              {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  Quiz #1
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquet sodales erat, vel tincidunt risus volutpat ut.
                  Sed at justo neque. Aliquam ut luctus mauris. Ut nisl magna,
                  ultricies quis libero in, aliquam sodales eros.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ display: "inline-block", maxWidth: 800, ml: "auto", mb: 3}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quiz #2
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquet sodales erat, vel tincidunt risus volutpat ut.
                  Sed at justo neque. Aliquam ut luctus mauris. Ut nisl magna,
                  ultricies quis libero in, aliquam sodales eros.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ display: "inline-block", maxWidth: 800, ml: "auto", mb: 3}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quiz #3
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquet sodales erat, vel tincidunt risus volutpat ut.
                  Sed at justo neque. Aliquam ut luctus mauris. Ut nisl magna,
                  ultricies quis libero in, aliquam sodales eros.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ display: "inline-block", maxWidth: 800, ml: "auto", mb: 3}}>
            <CardActionArea >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Quiz #4
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam aliquet sodales erat, vel tincidunt risus volutpat ut.
                  Sed at justo neque. Aliquam ut luctus mauris. Ut nisl magna,
                  ultricies quis libero in, aliquam sodales eros.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>


        </Box>
      </Container>
    </React.Fragment>
  );
}
