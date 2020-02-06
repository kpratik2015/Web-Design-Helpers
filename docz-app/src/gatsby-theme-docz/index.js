/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, useConfig, ComponentsProvider } from 'docz';
import { Styled, ThemeProvider } from 'theme-ui';

import defaultTheme from '~theme';
import useDarkMode from 'use-dark-mode';
import components from '~components';

const Theme = ({ children }) => {
  const config = useConfig();
  const { value: isDarkModeEnabled } = useDarkMode();
  const colorMode = isDarkModeEnabled ? 'dark' : 'light';
  return (
    <ThemeProvider
      theme={{
        ...config.themeConfig,
        colors: {
          ...config.themeConfig.colors,
          background: config.themeConfig.colors.modes[colorMode].background
        }
      }}
      components={components}
    >
      <ComponentsProvider components={components}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default theme(defaultTheme)(Theme);
