import React from 'react';
import './index.css';
import { ThemeProvider, createMuiTheme, } from '@material-ui/core';
import Home from '../src/home/Home';
import SignUp from '../src/home/SignUp';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import LogoCozinha from './assets/logo-login-cozinha.png';
import LogoSalao from './assets/logo-login-salao.png';
import Login from './home/Login';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';
import isAuth from './auth';

const theme = createMuiTheme();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }
  />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUp} exact />
          <Route path='/kitchen-login' component={() => (<Login srcImg={LogoCozinha} altImg='logo-cozinha' title='logo cozinha' />)} exact />
          <Route path='/hall-login' component={() => (<Login srcImg={LogoSalao} altImg='logo-salão' title='logo salão' />)} exact />
          <PrivateRoute path='/hall' component={Hall} exact />
          <PrivateRoute path='/kitchen' component={Kitchen} exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App