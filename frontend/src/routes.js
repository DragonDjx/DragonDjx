import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from './pages/PageNotFound';
import CartEmpty from './pages/CartEmpty';

import Header from './pages/partials/Header';
import Overlay from './pages/partials/Overlay';
import Footer from './pages/partials/Footer';
import Cart from './pages/Cart'

import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Overlay />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/CartEmpty" component={CartEmpty} />
        <Route path="/Cart" component={Cart}/>
        {/* <Route path="/produtos" component={Produtos} /> */}
          {/* <Route path=":produto" component={Produto} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}