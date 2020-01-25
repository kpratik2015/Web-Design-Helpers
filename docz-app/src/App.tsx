import React from 'react';
import MyThemeProvider from './theme/MyThemeProvider';

const App: React.FC = () => {
  return (
    <MyThemeProvider>
      <div>Hi</div>
    </MyThemeProvider>
  );
};

export default App;
