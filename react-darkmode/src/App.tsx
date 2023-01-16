import React, { useState } from 'react';
import MyComponent from './components/MyComponent';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <MyComponent />
    </ThemeContextProvider>
  );
}

export default App;
