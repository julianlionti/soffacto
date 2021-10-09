import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { MainRoute } from "./routes/MainRoute";
import { theme } from "./themes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRoute />
    </ThemeProvider>
  );
};
