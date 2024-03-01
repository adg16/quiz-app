import * as React from "react";
import { useEffect, useState } from "react";
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
import Divider from "@mui/material/Divider";

// export default function Answer() {
const Answer = React.forwardRef(function (props, ref) {
  const { state, dispatch } = useQuizContext();
  const navigate = useNavigate();
  const next = () => {
    // this.props.history.push('/userlist')
    alert("submitted");
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 1 min timer

  useEffect(() => {
    console.log("ANSWERT STATE", state);
  }, []);

  return (
    <div ref={ref} {...props}>
      <Divider sx={{marginTop: '20px'}}/>
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
    </div>
  );
});

export default Answer;
