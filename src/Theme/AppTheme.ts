import { Colors } from "./Colors";
import createTheme from "@mui/material/styles/createTheme";

export const AppTheme = createTheme({
  palette: {
    primary: {
      main: Colors.secondary,
    },
    secondary: {
      main: Colors.primary,
      contrastText: Colors.white,
    },
    error: {
      main: Colors.danger,
    },
    contrastThreshold: 2.9,
    tonalOffset: 0.1,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
