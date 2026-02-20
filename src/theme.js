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
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    h1: {
      fontSize: "clamp(2.5rem, 8vw, 5rem)",
      lineHeight: 1.1,
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "clamp(1.5rem, 4.5vw, 3rem)",
      lineHeight: 1.3,
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
    },
    h5: {
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
    h6: {
      fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
      lineHeight: 1.8,
    },
    body1: {
      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
      lineHeight: 1.8,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    overline: {
      letterSpacing: 3,

      color: "rgba(0,0,0,0.6)",
      textTransform: "uppercase",
    },
  },
});
