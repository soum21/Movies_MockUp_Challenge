import React from 'react';
import AppRouter from './config/router';
import AppContext from './config/context';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContext>
        <AppRouter />
      </AppContext>
    </ThemeProvider>

  );
}

export default App;
