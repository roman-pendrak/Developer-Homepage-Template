import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./style/theme";
import "./main.css";

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </ThemeProvider>
);
