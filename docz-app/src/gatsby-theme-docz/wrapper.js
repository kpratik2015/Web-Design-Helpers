import * as React from 'react';
import MyThemeProvider from 'mytheme/MyThemeProvider';
import { SEOHeader } from 'components/SEOHeader';
const Wrapper = ({ children, doc }) => (
  <MyThemeProvider>
    <SEOHeader doc={doc} />
    {children}
  </MyThemeProvider>
);
export default Wrapper;
