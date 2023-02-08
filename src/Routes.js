import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Cards from './pages/cards';
import Footer from './components/footer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Cards} />
      <Route exact path="/create" component={Footer} />
    </BrowserRouter>
  );
}
