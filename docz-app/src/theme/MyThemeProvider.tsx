import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components/macro';
import useDarkMode from 'use-dark-mode';
import React from 'react';
import { GlobalStyle } from './GlobalStyle';

const MyThemeProvider: React.FC = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);
  const { value: isDarkModeEnabled } = useDarkMode();
  const theme = isDarkModeEnabled ? darkTheme : lightTheme;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default MyThemeProvider;
