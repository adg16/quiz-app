import * as React from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useQuizContext } from "#contexts/QuizContext";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Divider from "@mui/material/Divider";

const Answer = React.forwardRef(function (props, ref) {
  const { state } = useQuizContext();

  return (
    <div ref={ref} {...props}>
      <Divider sx={{ mt: "28px", mb: "25px" }}>
        <TipsAndUpdatesIcon sx={{ color: "primary.main", fontSize: "40px" }} />
      </Divider>

      {state.currentQuestion.correctAnswerExplanationImage && (
        <CardMedia
          component="img"
          height="200"
          image={state.currentQuestion.correctAnswerExplanationImage}
          alt="Answer"
          sx={{
            mt: { xs: "6px", md: "16px" },
            mb: { xs: "-6px", md: "16px" },
            objectFit: "contain",
          }}
        />
      )}

      <Typography variant="body2" sx={{ mt: 3, mb: 4 }}>
        <div dangerouslySetInnerHTML={{ __html: state.currentQuestion.correctAnswerExplanation }} />
      </Typography>
    </div>
  );
});

export default Answer;
