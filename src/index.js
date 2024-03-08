import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { QuizProvider } from "#contexts/QuizContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#33a474",
      mainDark: "#2d7a5e",
      grey: "#636363",
      greyDark: "#3b3b3b",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <QuizProvider>
        <App />
      </QuizProvider>
    </ThemeProvider>
  </React.StrictMode>
);
