import React from 'react';

import './global.css';

import Routes from './routes';

import Header from './pages/partials/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
