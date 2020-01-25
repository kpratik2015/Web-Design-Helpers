import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-size: 10px; /**makes rem calculation easier */
  }
`;
