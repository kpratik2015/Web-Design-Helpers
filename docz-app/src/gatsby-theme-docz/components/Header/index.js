/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui';
import { useConfig, useCurrentDoc } from 'docz';
import useDarkMode from 'use-dark-mode';
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
    enable: enableDarkMode,
    disable: disableDarkMode,
    value
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
              {colorMode === 'light' ? <Moon size={15} /> : <Sun size={15} />}
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
