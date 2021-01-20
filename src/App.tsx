import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Hello from './components/Hello';
import Lotto from './components/Lotto';
import Nav from './components/Nav';
import Photo from './components/Photo';
import WebGL from './components/WebGL';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Hello />
            </Route>
            <Route exact path="/lotto">
              <Lotto />
            </Route>
            <Route exact path="/photo">
              <Photo />
            </Route>
            <Route exact path="/webgl">
              <WebGL />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
}
