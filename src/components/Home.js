import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Home() {
  const navigate = useNavigate();
  const goToQuizzes = () => {
    navigate("/quizzes");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                textAlign: "left",
                paddingTop: { xs: 10, md: 15 },
                paddingBottom: 5,
              }}
            >
              <Typography variant="h2" sx={{ color: "primary.greyDarker" }}>
                Hello,
              </Typography>
              <Typography variant="h2" sx={{ color: "primary.greyDarker" }}>
                welcome to mQuiz!
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "left",
                paddingBottom: 5,
                color: "primary.greyDarker",
              }}
            >
              <Typography variant="body">
                Praesent gravida efficitur euismod. Vivamus justo nunc, dictum
                gravida malesuada a, maximus ut nisl. Ut ac consequat nibh.
                Praesent urna odio, pharetra tempus euismod vel, semper vel
                nibh. Proin tempus vestibulum tellus sed accumsan. Maecenas in
                dignissim ipsum, nec porttitor libero. Ut nec porta est. Cras
                nec faucibus diam.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIosIcon />}
                sx={{
                  minWidth: 200,
                  fontSize: "18px",
                  color: "#fff",
                  borderColor: "primary.main",
                  backgroundColor: "primary.main",
                  borderRadius: "30px",
                  height: "60px",
                  width: "250px",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
                  "&:hover": {
                    backgroundColor: "primary.mainDark",
                    borderColor: "primary.mainDark",
                  },
                }}
                onClick={goToQuizzes}
              >
                Take a Quiz
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                sx={{
                  position: "absolute",
                  maxHeight: { xs: 342, sm: 500, md: 800 },
                  maxWidth: { xs: 342, sm: 500, md: 800 },
                  top: { xs: -670, sm: -630, md: -180 },
                  right: { xs: -68, sm: -98, md: -140 },
                  opacity: 0.1,
                  transform: "rotate(45deg)",
                }}
                alt="math-bg"
                src="/images/math_bg_1.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
