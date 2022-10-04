import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Page from './Page';
import { Theme, ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Header title="Typescript Context API example" />
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
