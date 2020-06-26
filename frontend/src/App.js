import React from 'react';

import './global.css';

import Routes from './routes';

import Header from './pages/partials/Header';
import Overlay from './pages/partials/Overlay';

function App() {
  return (
    <div id="content">
      <Header />
      <Overlay />
      <Routes />
    </div>
  );
}

export default App;
