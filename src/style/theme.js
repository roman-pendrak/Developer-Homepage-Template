import { createTheme } from "@mui/material/styles";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#242424", // Your primary color
    },
    secondary: {
      main: "#5b5b5b", // Your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Tangerine, cursive",
    },
  },
});

export default theme;
