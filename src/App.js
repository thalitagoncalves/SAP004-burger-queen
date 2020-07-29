import React from 'react';
import './index.css';
import { ThemeProvider } from '@material-ui/core';
import Home from '../src/home/Home';
import SignUp from '../src/home/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@material-ui/core';
import LayoutUseStyles from '../src/styles/Layout.styles';
import LogoCozinha from './assets/logo-login-cozinha.png';
import LogoSalao from './assets/logo-login-salao.png';
import Login from './home/Login';

function App() {
  const classes = LayoutUseStyles();
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box className={classes.box}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/signup' component={SignUp} exact />
            <Route path='/kitchen-login' component={() => (<Login srcImg={LogoCozinha} altImg='logo-cozinha' title='logo cozinha' />)} exact />
            <Route path='/hall-login' component={() => (<Login srcImg={LogoSalao} altImg='logo-salão' title='logo salão' />)} exact />
          </Switch>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App