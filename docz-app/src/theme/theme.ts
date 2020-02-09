const size: any = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
};

const qBreakpoints = Object.keys(size).reduce<any>((acc, cur) => {
  acc[cur] = `(min-width: ${size[cur]}px)`;
  return acc;
}, {});

/**Color generation: https://codyhouse.co/ds/globals/colors */
const colors = {
  primaryLighter: 'hsl(202, 95%, 28%)',
  primaryLight: 'hsl(202, 95%, 18%)',
  primary: 'hsl(202, 95%, 8%)',
  primaryDark: 'hsl(202, 95%, 4%)',
  primaryDarker: 'hsl(202, 95%, 0%)',
  accentLighter: 'hsl(30, 88%, 70%)',
  accentLight: 'hsl(30, 88%, 60%)',
  accent: 'hsl(30, 88%, 50%)',
  accentDark: 'hsl(30, 88%, 40%)',
  accentDarker: 'hsl(30, 88%, 30%)',
  black: 'hsl(240, 8%, 12%)',
  white: 'hsl(0, 0%, 100%)',
  success: '#23A57A',
  danger: '#DE3345',
  warning: '#FFAA55',
  shades: [
    'hsl(0, 0%, 95%)', // 0
    'hsl(240, 1%, 83%)', // 1
    'hsl(240, 1%, 48%)', // 2
    'hsl(240, 4%, 20%)', // 3
    'hsl(240, 8%, 12%)', // 4
    'hsl(240, 18%, 6%)' // 5
  ],
  blacks: [
    'rgba(0,0,0,.0125)',
    'rgba(0,0,0,.025)',
    'rgba(0,0,0,.05)',
    'rgba(0,0,0,.1)',
    'rgba(0,0,0,.2)',
    'rgba(0,0,0,.3)',
    'rgba(0,0,0,.4)',
    'rgba(0,0,0,.5)',
    'rgba(0,0,0,.6)',
    'rgba(0,0,0,.7)',
    'rgba(0,0,0,.8)',
    'rgba(0,0,0,.9)'
  ],
  whites: [
    'rgba(255,255,255,.0125)',
    'rgba(255,255,255,.025)',
    'rgba(255,255,255,.05)',
    'rgba(255,255,255,.1)',
    'rgba(255,255,255,.2)',
    'rgba(255,255,255,.3)',
    'rgba(255,255,255,.4)',
    'rgba(255,255,255,.5)',
    'rgba(255,255,255,.6)',
    'rgba(255,255,255,.7)',
    'rgba(255,255,255,.8)',
    'rgba(255,255,255,.9)'
  ],
  border: {
    default: '#d9dbe3',
    light: '#eff0f1'
  },
  indicators: {
    primary: {
      light: '#C4DFFD',
      default: '#0172F5',
      dark: '#134681'
    },
    success: {
      light: '#C4FDEA',
      default: '#23A57A',
      text: '#1c8562',
      dark: '#0F6246'
    },
    warning: {
      light: '#FDE0C4',
      default: '#FFAA55',
      text: '#d16900',
      dark: '#814A13'
    },
    danger: {
      light: '#FDCED3',
      default: '#DE3345',
      text: '#c21e2f',
      dark: '#81131D'
    }
  }
};

const fontScaleRatio = 1.1;
const typography = {
  fontPrimary: 'Lato',
  fontSecondary: 'Frank Ruhl Libre',
  fontSizes: [
    `calc(1rem / (${fontScaleRatio} * ${fontScaleRatio}))`,
    `calc(1rem / ${fontScaleRatio})`,
    `1rem`,
    `calc(1rem * ${fontScaleRatio})`,
    `calc(1rem * ${fontScaleRatio * 2})`,
    `calc(1rem * ${fontScaleRatio * 3})`,
    `calc(1rem * ${fontScaleRatio * 4})`,
    `calc(1rem * ${fontScaleRatio * 5})`
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 700,
    bold: 900,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6
  },
  letterSpacings: {
    normal: 'normal',
    nominal: '1px',
    tracked: '0.1rem',
    tight: '-0.05rem',
    mega: '0.25rem'
  }
};

const light = {
  bg: {
    primary: colors.shades[0],
    secondary: colors.white,
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)'
  },
  text: {
    primary: colors.primary,
    secondary: colors.shades[4],
    tertiary: colors.shades[3],
    quarternary: colors.shades[2],
    placeholder: 'rgba(82,85,96,0.5)'
  }
  // ...
};

const spacingMultiplier = 1; // rem

const layout = {
  breakpoints: Object.keys(size),
  radii: [`0`, `0.25rem`, `0.4rem`, `1.6rem`, `9999`, '100%'],
  space: [
    `${0.25 * spacingMultiplier}rem`, // 0
    `${0.5 * spacingMultiplier}rem`, // 1
    `${0.75 * spacingMultiplier}rem`, // 2
    `${1 * spacingMultiplier}rem`, // 3
    `${1.25 * spacingMultiplier}rem`, // 4
    `${2 * spacingMultiplier}rem`, // 5
    `${3.25 * spacingMultiplier}rem`, // 6
    `${5.25 * spacingMultiplier}rem` // 7
  ],
  boxShadows: {
    shadow100:
      'rgba(32,47,71,0.1) 0px 0.125rem 0.125rem 0px, rgba(32,47,71,0.05) 0px 0px 0.25rem 0px, rgba(32,47,71,0.03) 0px 0px 0px 0.0625rem',
    shadow200:
      'rgba(32, 47, 71, 0.08) 0px 0.1875rem 0.25rem -0.0625rem, rgba(32, 47, 71, 0.06) 0px 0.125rem 0.4375rem 0px, rgba(32, 47, 71, 0.04) 0px -0.1875rem 0.1875rem -0.125rem, rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem',
    shadow300:
      'rgba(32, 47, 71, 0.06) 0px 0.8125rem 0.4375rem -0.4375rem, rgba(32, 47, 71, 0.08) 0.625rem 0.25rem 0.4375rem -0.5rem, rgba(32, 47, 71, 0.08) -0.625rem 0.25rem 0.4375rem -0.5rem, rgba(32, 47, 71, 0.06) 0px 0.1875rem 0.375rem 0px, rgba(32, 47, 71, 0.04) 0px -0.25rem 0.5rem -0.125rem, rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem',
    shadow400:
      'rgba(32, 47, 71, 0.08) 0.75rem 0.25rem 0.75rem -0.5rem, rgba(32, 47, 71, 0.08) -0.75rem 0.25rem 0.75rem -0.5rem, rgba(32, 47, 71, 0.08) 0px 0.75rem 0.75rem -0.375rem, rgba(32, 47, 71, 0.06) 0px 0.375rem 0.5rem 0px, rgba(32, 47, 71, 0.02) 0px -0.5rem 0.5rem -0.125rem, rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem',
    shadow500:
      'rgba(32, 47, 71, 0.08) 0.9375rem 0.25rem 0.9375rem -0.5rem, rgba(32, 47, 71, 0.08) -0.9375rem 0.25rem 0.9375rem -0.5rem, rgba(32, 47, 71, 0.08) 0px 1.25rem 1.25rem -0.375rem, rgba(32, 47, 71, 0.06) 0px 0.875rem 0.625rem -0.25rem, rgba(32, 47, 71, 0.02) 0px -0.25rem 0.5rem -0.125rem, rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem',
    shadow600:
      'rgba(32, 47, 71, 0.08) 1.25rem 0.25rem 1.25rem -0.5rem, rgba(32, 47, 71, 0.08) -1.25rem 0.25rem 1.25rem -0.5rem, rgba(32, 47, 71, 0.08) 0px 1.25rem 1.625rem -0.125rem, rgba(32, 47, 71, 0.06) 0px 1.875rem 1.625rem -0.5rem, rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem'
  },
  gutter: {
    xxs: 0.2,
    xs: 0.39,
    sm: 0.67,
    md: 1,
    lg: 1.33,
    xl: 1.89,
    xxl: 2.2
  }
};

const dark = {
  bg: {
    primary: colors.shades[5],
    secondary: colors.shades[4],
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)'
  },
  text: {
    primary: colors.shades[0],
    secondary: colors.shades[1],
    tertiary: colors.shades[2],
    quarternary: colors.shades[3],
    placeholder: 'rgba(145,148,161,0.5)'
  }
  // ...
};

const defaultTheme = {
  colors,
  ...typography,
  ...layout,
  qBreakpoints
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
