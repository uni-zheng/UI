import React, { createContext } from 'react';
import { createTheming } from 'react-jss';
import { grey, lightBlue, red } from './colors';

const defaultTheme = {
  palette: {
    danger: red[500],
  },
  button: {
    horizontalPadding: 16,
    minWidth: 80,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 14,
    themeColor: grey[500],
  },
  textButton: {
    minWidth: 0,
  },
  switch: {
    width: 36,
    height: 24,
    themeColor: lightBlue[500],
    controlSize: 20,
  }
};

const defaultZuiThemeContext = createContext(defaultTheme);

const {
  ThemeProvider: ZuiThemeProvider,
  useTheme: useZuiTheme,
} = createTheming(
  defaultZuiThemeContext,
);

export { defaultZuiThemeContext, ZuiThemeProvider, useZuiTheme };