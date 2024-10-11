import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  { id: 1, name: 'White', className: 'light' },
  { id: 2, name: 'Black', className: 'dark' },
  { id: 3, name: 'Blue', className: 'dark-blue' },
];

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const themeContextValue = {
    themes,
    theme: currentTheme,
    setTheme: setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={currentTheme.className}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const App = () => (
  <ThemeProvider>
    <Tabs className="mb-3" defaultActiveKey="home">
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Profile />
      </Tab>
    </Tabs>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default App;
