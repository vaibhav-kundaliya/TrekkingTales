import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from '@mui/material/colors';

const theme = createTheme({
   palette: {
      navbar: {
         main: "#00a7fe",
         hover: "#7dd3ff",
      },
   },
});

export default theme;
