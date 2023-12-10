import { PaletteMode } from '@mui/material';
import { amber } from '@mui/material/colors';

const black = '#000';
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? amber[500] : black
    },
    text: {
      primary: mode === 'light' ? black : '#fff'
    },
    background: {
      default: mode === 'light' ? '#fff' : black
    },

  }
});

export default getDesignTokens;
