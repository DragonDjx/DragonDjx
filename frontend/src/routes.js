import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './pages/partials/Header';
import Overlay from './pages/partials/Overlay';

import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Overlay />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/produtos" component={Produto} /> */}
      </Switch>
    </BrowserRouter>
  );
}