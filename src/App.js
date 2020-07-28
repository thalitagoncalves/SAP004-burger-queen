import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Home from './Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App