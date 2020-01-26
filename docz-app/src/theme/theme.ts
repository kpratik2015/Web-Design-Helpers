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
  success: 'hsl(94, 48%, 56%)',
  error: 'hsl(349, 75%, 51%)',
  warning: 'hsl(46, 100%, 61%)',
  shades: [
    'hsl(0, 0%, 95%)',
    'hsl(240, 1%, 83%)',
    'hsl(240, 1%, 48%)',
    'hsl(240, 4%, 20%)',
    'hsl(240, 8%, 12%)',
    'hsl(240, 18%, 6%)'
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
  ]
};

const typography = {
  fontPrimary: 'Lato',
  fontSecondary: 'Frank Ruhl Libre',
  fontBaseSize: '1.6rem',
  fontScaleRatio: '1.2',
  fontSizes: [
    '1.4rem', // 0
    '1.6rem', // 1
    '1.8rem', // 2
    '2.2rem', // 3
    '2.6rem', // 4
    '3.2rem', // 5
    '4.0rem' // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6
  },
  letterSpacings: {
    normal: 'normal',
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
    primary: colors.shades[5],
    secondary: colors.shades[4],
    tertiary: colors.shades[3],
    quarternary: colors.shades[2],
    placeholder: 'rgba(82,85,96,0.5)'
  }
  // ...
};

const spacingMultiplier = 1; // rem

const layout = {
  breakpoints: [32, 48, 64],
  radii: [0, 2, 4, 16, 9999, '100%'],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  space: [
    `${0.25 * spacingMultiplier}rem`,
    `${0.5 * spacingMultiplier}rem`,
    `${0.75 * spacingMultiplier}rem`,
    `${1 * spacingMultiplier}rem`,
    `${1.25 * spacingMultiplier}rem`,
    `${2 * spacingMultiplier}rem`,
    `${3.25 * spacingMultiplier}rem`,
    `${5.25 * spacingMultiplier}rem`
  ]
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
  ...layout
};

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
