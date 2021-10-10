import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import "../fonts/fonts.css";

export const theme = createTheme({
  palette: {
    primary: blue,
    mode: "dark",
  },
  typography: {
    fontFamily: "Inkfree",
  },
});
