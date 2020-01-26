import { createGlobalStyle } from 'styled-components/macro';

/**
 * Guidelines:
 * Ref: https://www.smashingmagazine.com/2009/08/typographic-design-survey-best-practices-from-the-best-blogs/
 * Header font size ÷ Body copy font size = 1.96.
 * Line height (pixels) ÷ body copy font size (pixels) = 1.48.
 * Line length (pixels) ÷ line height (pixels) = 27.8.
 * Space between paragraphs (pixels) ÷ line height (pixels) = 0.754.
 */

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    color: ${props => props.theme.text.primary};
    background-color: ${props => props.theme.bg.primary};
    font-size: 10px; /**makes rem calculation easier */
    font-weight: ${props => props.theme.fontWeights.body};
    font-family: ${props => props.theme.fontPrimary};
    line-height: ${props => props.theme.lineHeights.body};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  h1, h2, h3, h4, form legend {
    color: ${props => props.theme.text.primary};
    margin-bottom: ${props => props.theme.space[1]};
    line-height: ${props => props.theme.lineHeights.heading};
  }

  h1 { font-size: ${props => props.theme.fontSizes[6]} }
  h2 { font-size: ${props => props.theme.fontSizes[5]} }
  h3 { font-size: ${props => props.theme.fontSizes[4]} }
  h4 { font-size: ${props => props.theme.fontSizes[3]} }
  h5 { font-size: ${props => props.theme.fontSizes[2]} }
  h6 { font-size: ${props => props.theme.fontSizes[1]} }

  /**
  -----------------------------
  Utility classes
  -----------------------------
  */

  /**
  * Main content containers
  * 1. Make the container full-width with a maximum width
  * 2. Center it in the viewport
  * 3. Leave some space on the edges, especially valuable on small screens
  */
  .container {
    max-width: ${props => `${props.theme.breakpoints[5]}px`}; /* 1 */
    margin-left: auto; /* 2 */
    margin-right: auto; /* 2 */
    padding-left: 20px; /* 3 */
    padding-right: 20px; /* 3 */
    width: 100%; /* 1 */
  }

  /**
  * Hide text while making it readable for screen readers
  * 1. Needed in WebKit-based browsers because of an implementation bug;
  *    See: https://code.google.com/p/chromium/issues/detail?id=457146
  */
  .hide-text {
    overflow: hidden;
    padding: 0; /* 1 */
    text-indent: 101%;
    white-space: nowrap;
  }

  /**
  * Hide element while making it readable for screen readers
  * https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L119-L133
  */
  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  /**truncate text if it exceeds parent */
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
