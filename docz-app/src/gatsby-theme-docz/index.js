/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, useConfig, ComponentsProvider } from 'docz';
import { Styled, ThemeProvider } from 'theme-ui';
import MyThemeProvider from 'mytheme/MyThemeProvider';

import defaultTheme from '~theme';
import components from '~components';
import useDarkMode from 'use-dark-mode';

const Theme = ({ children }) => {
  const config = useConfig();
  const { value: isDarkModeEnabled } = useDarkMode();
  return (
    <ThemeProvider
      theme={{
        ...config.themeConfig,
        initialColorMode: isDarkModeEnabled ? 'dark' : 'light'
      }}
      components={components}
    >
      <ComponentsProvider components={components}>
        <MyThemeProvider>
          <Styled.root>{children}</Styled.root>
        </MyThemeProvider>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default theme(defaultTheme)(Theme);
