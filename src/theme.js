import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5B21B6",
      light: "#7c4dff",
      dark: "#4a148c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00D9FF",
      light: "#33e0ff",
      dark: "#0097b2",
      contrastText: "#000",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    background: {
      main: "#1a4a5e",
      default: "#F2F2E6",
      paper: "#5B21B6",
      services: "linear-gradient(180deg, #000 0%, #1a4a5e 100%)",
      light: "#ffffff",
      dark: "#000000",
      lavender: "linear-gradient(180deg, #ffffff 0%, #5B21B6 95%)",
      gradientBottom: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
    },
    text: {
      primary: "#000000",
      secondary: "#6b6b6b",
      dimmed: "rgba(255, 255, 255, 0.5)",
      white: "#ffffff",
      whiteMuted: "rgba(255, 255, 255, 0.7)",
      whiteDimmed: "rgba(255, 255, 255, 0.15)",
      blackMuted: "rgba(0, 0, 0, 0.7)",
      blackDimmed: "rgba(0, 0, 0, 0.6)",
    },
    border: {
      primary: "#2962ff",
      whiteMuted: "rgba(255, 255, 255, 0.2)",
      dimmed: "rgba(0,0,0,0.1)",
    },
  },
});
