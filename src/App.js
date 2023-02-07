import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';
import { themes } from './styles/themes/theme';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
        onToggleTheme={handleToggleTheme}
        currentTheme={theme}
      />
    </ThemeProvider>
  );
}
