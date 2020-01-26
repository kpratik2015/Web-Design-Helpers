// import original module declarations
import 'styled-components/macro';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: {
      primary: string;
      secondary: string;
      inset: string;
      input: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
      placeholder: string;
    };
    colors: {
      primaryLighter: string;
      primaryLight: string;
      primary: string;
      primaryDark: string;
      primaryDarker: string;
      accentLighter: string;
      accentLight: string;
      accent: string;
      accentDark: string;
      accentDarker: string;
      black: string;
      white: string;
      success: string;
      error: string;
      warning: string;
      shades: string[];
      blacks: string[];
      whites: string[];
    };
    fontPrimary: string;
    fontSecondary: string;
    fontBaseSize: string;
    fontSizes: string[];
    fontWeights: {
      body: number;
      subheading: number;
      link: number;
      bold: number;
      heading: number;
    };
    lineHeights: {
      body: number;
      heading: number;
      code: number;
    };
    letterSpacings: {
      normal: string;
      tracked: string;
      tight: string;
      mega: string;
    };
    breakpoints: string[];
    radii: number[] | string[];
    space: string[];
  }
}
