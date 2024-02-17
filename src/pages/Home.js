import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const goToQuizzes = () => {
    navigate("/quizzes");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ bgcolor: "#fff" }}>
        <Box sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}>
          <Typography variant="h2">Welcome to Quiz App</Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sagittis congue quam eget pulvinar. Aenean blandit erat et euismod
            euismod. Curabitur iaculis sapien sed purus efficitur, non pretium
            lectus facilisis. Aliquam auctor consectetur eros at convallis.
            Aenean lorem odio, posuere eu risus vel, egestas pulvinar dolor.
            Vivamus elit ante, convallis vitae diam et, malesuada eleifend
            magna. Proin eget nulla vel orci consectetur bibendum id id risus.
            Integer interdum luctus diam a vestibulum. Sed efficitur interdum
            rhoncus. Fusce nunc magna, tincidunt ut fermentum vitae, faucibus
            nec orci. Ut nec volutpat nulla.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", paddingBottom: 5 }}>
          <Typography variant="body">
            Praesent gravida efficitur euismod. Vivamus justo nunc, dictum
            gravida malesuada a, maximus ut nisl. Ut ac consequat nibh. Praesent
            urna odio, pharetra tempus euismod vel, semper vel nibh. Proin
            tempus vestibulum tellus sed accumsan. Maecenas in dignissim ipsum,
            nec porttitor libero. Ut nec porta est. Cras nec faucibus diam.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            size="large"
            sx={{ minWidth: 200, color: "black", borderColor: "black" }}
            onClick={goToQuizzes}
          >
            Take a Quiz
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
