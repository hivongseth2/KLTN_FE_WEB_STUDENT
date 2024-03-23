import React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

function AppThemeProvider({ children }) {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: 'light',
        grey: {
          0: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#8E8E93',
          500: '#8C8C8C',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
        primary: {
          lighter: '#D0ECFE',
          light: '#73BAFB',
          main: '#1877F2',
          dark: '#0052CC',
          darker: '#091E42',
          contrastText: '#FFFFFF',
        },
        secondary: {
          lighter: '#EFD6FF',
          light: '#C684FF',
          main: '#8E33FF',
          dark: '#5119B7',
          darker: '#27097A',
          contrastText: '#FFFFFF',
        },
        info: {
          lighter: '#CAFDF5',
          light: '#61F3F3',
          main: '#00B8D9',
          dark: '#006C9C',
          darker: '#003768',
          contrastText: '#FFFFFF',
        },
        success: {
          lighter: '#C8FAD6',
          light: '#00BE2A',
          main: '#00A76F',
          dark: '#007867',
          darker: '#004B50',
          contrastText: '#FFFFFF',
        },
        warning: {
          lighter: '#FFF5CC',
          light: '#FACC15',
          main: '#FFAB00',
          dark: '#B76E00',
          darker: '#7A4100',
          contrastText: '#8C8C8C',
        },
        error: {
          lighter: '#FFE9D5',
          light: '#FFAC82',
          main: '#F50B0B',
          dark: '#B71D18',
          darker: '#7A0916',
          contrastText: '#FFFFFF',
        },
        common: {
          black: '#000000',
          white: '#FFFFFF',
        },
        background: {
          paper: '#FFFFFF',
          default: '#FAFAFA', // Background color for the entire application
          neutral: '#FAFAFA', // Background color for neutral elements
        },
        text: {
          primary: '#161C24', // Set the global text color
          secondary: '#999999',
          disabled: '#C3C1BD',
        },
      },

      typography: {
        fontFamily: 'Open Sans, sans-serif',
      },

      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              fontFamily: 'Open Sans, sans-serif',
              color: '#161C24',
            },
          },
        },
      },
    }),
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
