import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from './pages/PageNotFound';

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
        {/* <Route path="/produtos" component={Produtos} /> */}
          {/* <Route path=":produto" component={Produto} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}