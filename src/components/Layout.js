import React from 'react';

import Header from './header';
import Card from './card';
import Footer from './footer';

export default function Layout({ onToggleTheme, currentTheme }) {
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        currentTheme={currentTheme}
      />
      <Card />
      <Card />
      <Card />
      <Footer />
    </>
  );
}
