import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#414141",
      light: "#676767",
      dark: "#2D2D2D",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#414141",
    },

    secondary: {
      main: "#FEB82F",
    },
  },
});
