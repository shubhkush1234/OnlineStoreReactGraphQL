import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import "gestalt/dist/gestalt.css";


const Root = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route component={App} path="/" />
        <Route component={Signup} path="/Signup" />
        <Route component={Signin} path="/Signin" />
        <Route component={Checkout} path="/Checkout" />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

