import React from 'react';

import Header from './header';
import Routes from '../Routes';

export default function Layout({ onToggleTheme, currentTheme }) {
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        currentTheme={currentTheme}
      />
      <Routes />
    </>
  );
}
