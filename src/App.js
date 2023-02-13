import React, {
  useState, useMemo, useEffect,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import Layout from './components/Layout';
import GlobalStyle from './styles/GlobalStyle';
import { themes } from './styles/themes/theme';
import { UpdateTaskContextProvider } from './context/UpdateTaskContext';

export default function App() {
  const [theme, setTheme] = useState();

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <ModalProvider>
        <UpdateTaskContextProvider>
          <GlobalStyle />
          <Layout
            onToggleTheme={handleToggleTheme}
            currentTheme={theme}
          />
        </UpdateTaskContextProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}
