import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import Map from './Map';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Datapickerz from './Datapickerz';
import React, { Component as C } from 'react';
import { render as r } from 'react-dom';
import { hot } from 'react-hot-loader';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Map} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/datapickerz" component={Datapickerz} />
    </Switch>
  </main>
);

const Menu = () => (
  <header>
    <nav>
      <button><Link to="/">Карта</Link></button>
      <button><Link to="/gallery">Галерея</Link></button>
      <button><Link to="/reviews">Отзывы</Link></button>
      <button><Link to="/datapickerz">DataPicker</Link></button>
    </nav>
  </header>
);

const App = () => (
  <div><Menu /><Content />
  </div>);

export default hot(module)(App);