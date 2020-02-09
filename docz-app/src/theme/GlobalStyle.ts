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
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  body {
    && { 
      color: ${props => props.theme.text.primary};
      background-color: ${props => props.theme.bg.primary};
      font-size: 10px; /**makes rem calculation easier */
      font-weight: ${props => props.theme.fontWeights.body};
      font-family: ${props => props.theme.fontPrimary};
      letter-spacing: ${props => props.theme.letterSpacings.nominal};
      line-height: ${props => props.theme.lineHeights.body};
    }
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

  :focus {
    outline: ${props => props.theme.colors.accentLight} dashed 2px;
  }

  /**
  -----------------------------
  Docz Overrides
  -----------------------------
  */
  [data-testid="playground"] {
    margin-bottom: 2rem !important;
  }
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

  .page-container, div[data-testid="main-container"] {
    padding-bottom: 30vh;
    width: 100%;
    margin: 0px auto;
    padding: ${props => props.theme.space[6]};
    @media ${props => props.theme.qBreakpoints.laptop} {
      width: 920px;
    }
    @media ${props => props.theme.qBreakpoints.mobileL} {
      padding: ${props => props.theme.space[6]} ${props =>
  props.theme.space[7]};
    }
    h2 {
      margin-top: ${props => props.theme.space[5]};
      padding-top: 0;
      &:first-of-type {
        margin-top: ${props => props.theme.space[6]};
        padding-top: 0;
      }
    }
  }

  .pr-grid {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    &--start {
      align-items: flex-start;
    }
    &--stretch {
      align-items: stretch;
    }
    &--center {
      align-items: center;
    }

    > * {
      flex: 0 1 auto;
      min-width: 0;
      max-width: 100%;
      flex-basis: 100%;
      padding: ${props => props.theme.space[1]};
    }

    &.as--gutter {
      margin-left: ${props => `-${props.theme.space[3]}`};
      margin-top: ${props => `-${props.theme.space[2]}`};
      margin-bottom: ${props => `-${props.theme.space[2]}`};
      > * {
        padding-left: ${props => props.theme.space[3]};
        padding-top: ${props => props.theme.space[2]};
        padding-bottom: ${props => props.theme.space[2]};
        padding-right: 0;
      }
      &--lg {
        margin-left: ${props => `-${props.theme.space[5]}`};
        > * {
          padding-left: ${props => props.theme.space[5]};
        }
      }
    }
    
    > *.as--4 {
      max-width: 50%;
      flex-basis: 50%;
      @media ${props => props.theme.qBreakpoints.mobileL} {
        max-width: 25%;
        flex-basis: 25%;
      }
    }
    > *.as--3 {
      max-width: 50%;
      flex-basis: 50%;
      @media ${props => props.theme.qBreakpoints.mobileL} {
        max-width: 33.33%;
        flex-basis: 33.33%;
      }
    }
    > *.as--2 {
      max-width: 50%;
      flex-basis: 50%;
    }
  }

  .badge {
    display: inline-block;
    vertical-align: middle;
    padding: .4em .8em;
    margin-top: -.3em;
    font-size: ${props => props.theme.fontSizes[0]};
    line-height: 1;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    border-radius: 62.5rem;
    color: ${props => props.theme.text.secondary};
    background: ${props => props.theme.bg.primary};
    box-shadow: inset 0 0 0 0.0625rem ${props => props.theme.colors.blacks[2]};
    &.as--xs {
      padding: 0.125rem 0.25rem;
      font-size: ${props => `calc(${props.theme.fontSizes[0]} - 0.125rem)`};  
    }
    &.as--end {
      margin-left: ${props => props.theme.space[1]};
    }
  }
  
`;
