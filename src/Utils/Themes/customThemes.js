import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from '@mui/material/colors';

const theme = createTheme({
   palette: {
      navbar: {
         main: "#00a7fe",
         hover: "#7dd3ff",
      },
      background: {
         main: "#FFFF",
         secondary: "#f0f0f0"
      }
   },
});

export default theme;
