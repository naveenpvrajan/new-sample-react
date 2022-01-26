import { createTheme } from '@mui/material/styles';
import { orange, cyan } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: cyan[500],
    },
  }
});

