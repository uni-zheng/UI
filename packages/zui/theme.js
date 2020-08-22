import React, { createContext } from 'react';
import { createTheming } from 'react-jss';
import { grey, red } from './colors';

const defaultTheme = {
  palette: {
    danger: red[500],
  },
  button: {
    horizontalPadding: 16,
    minWidth: 80,
    height: 34,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 14,
    themeColor: grey[500],
  },
  textButton: {
    minWidth: 0,
  },
};

const defaultZuiThemeContext = createContext(defaultTheme);

const {
  ThemeProvider: ZuiThemeProvider,
  useTheme: useZuiTheme,
} = createTheming(
  defaultZuiThemeContext,
);

export { defaultZuiThemeContext, ZuiThemeProvider, useZuiTheme };