import React from 'react';
import './index.css';
import { ThemeProvider } from '@material-ui/core';
import Home from './Home';
import SignUp from './SignUp';
import KitchenLogin from './Kitchen-login';
import HallLogin from './Hall-login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUp} exact />
          <Route path='/kitchen-login' component={KitchenLogin} exact />
          <Route path='/hall-login' component={HallLogin} exact />
        </Switch>
      </BrowserRouter>,
    </ThemeProvider>
  )
}

export default App