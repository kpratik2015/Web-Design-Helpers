import {} from 'styled-components';
import { lightTheme } from '../theme/theme';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  type Theme = typeof lightTheme;
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  type Theme = typeof lightTheme;
  interface Attributes {
    css?: CSSProp<Theme> | CSSObject;
  }
}
