/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui';
import { useConfig, useCurrentDoc } from 'docz';
import useDarkMode from 'use-dark-mode';
import { useEffect } from 'react';
import * as styles from './styles';
import { Edit, Menu, Sun, Github, Moon } from '../Icons';
import { Logo } from '../Logo';

export const Header = props => {
  const { onOpen } = props;
  const {
    repository,
    themeConfig: { showDarkModeSwitch, showMarkdownEditButton }
  } = useConfig();
  const { edit = true, ...doc } = useCurrentDoc();
  const [colorMode, setColorMode] = useColorMode();
  const {
    value: isDarkModeEnabled,
    enable: enableDarkMode,
    disable: disableDarkMode
  } = useDarkMode();
  const colorSwitchAriaLabel =
    colorMode === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode';
  const toggleColorMode = () => {
    if (colorMode === 'light') {
      enableDarkMode();
      setColorMode('dark');
    } else {
      disableDarkMode();
      setColorMode('light');
    }
  };

  useEffect(() => {
    if (isDarkModeEnabled) {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div sx={styles.wrapper} data-testid="header">
      <Box sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <div sx={styles.innerContainer}>
        <Logo />
        <Flex>
          {repository && (
            <Box sx={{ mr: 2 }}>
              <a
                href={repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
          {showDarkModeSwitch && (
            <button
              aria-label={colorSwitchAriaLabel}
              title={colorSwitchAriaLabel}
              sx={styles.headerButton}
              onClick={toggleColorMode}
            >
              <Moon
                size={15}
                style={{
                  position: 'absolute',
                  transform:
                    colorMode === 'light'
                      ? 'translateY(30px)'
                      : 'translateY(0px)',
                  transition: 'transform 0.4s ease'
                }}
              />
              <Sun
                size={15}
                style={{
                  position: 'absolute',
                  transform:
                    colorMode === 'light'
                      ? 'translateY(0px)'
                      : 'translateY(30px)',
                  transition: 'transform 0.4s ease'
                }}
              />
            </button>
          )}
        </Flex>
        {showMarkdownEditButton && edit && doc.link && (
          <a
            sx={styles.editButton}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Edit width={14} />
            <Box sx={{ pl: 2 }}>Edit page</Box>
          </a>
        )}
      </div>
    </div>
  );
};
