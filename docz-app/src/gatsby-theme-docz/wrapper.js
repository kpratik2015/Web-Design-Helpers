import * as React from 'react';
import MyThemeProvider from 'mytheme/MyThemeProvider';
const Wrapper = ({ children }) => <MyThemeProvider>{children}</MyThemeProvider>;
export default Wrapper;
