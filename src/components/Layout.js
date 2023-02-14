import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import Routes from '../Routes';
import Footer from './footer';

export default function Layout({ onToggleTheme, currentTheme }) {
  return (
    <BrowserRouter>
      <Header
        onToggleTheme={onToggleTheme}
        currentTheme={currentTheme}
      />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
