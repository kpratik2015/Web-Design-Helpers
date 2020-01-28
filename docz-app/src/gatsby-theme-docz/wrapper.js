import * as React from 'react';
import MyThemeProvider from 'mytheme/MyThemeProvider';

const Wrapper = ({ children }) => (
  <React.Fragment>
    <MyThemeProvider>{children}</MyThemeProvider>
  </React.Fragment>
);
export default Wrapper;
