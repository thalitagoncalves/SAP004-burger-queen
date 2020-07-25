import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home';
import SignUp from './SignUp';
import KitchenLogin from './Kitchen-login';
import HallLogin from './Hall-login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/signup' component={SignUp} exact />
      <Route path='/kitchen' component={KitchenLogin} exact />
      <Route path='/hall' component={HallLogin} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
