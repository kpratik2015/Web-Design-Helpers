/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { Link, useConfig } from 'docz';
import logo from './logo.jpg';
import * as styles from './styles';
import { Styled } from 'theme-ui';

export const Logo = () => {
  const config = useConfig();
  return (
    <Link to="/" sx={styles.link}>
      <Flex sx={styles.logo} data-testid="logo">
        <img src={logo} alt="logo" />
        <Styled.h2 as="h1" sx={styles.title}>
          {config.title}
        </Styled.h2>
      </Flex>
    </Link>
  );
};
