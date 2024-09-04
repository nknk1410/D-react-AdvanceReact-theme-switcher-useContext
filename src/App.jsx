import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import Switch from './Switch';
import './App.css'; // Add your CSS styles here

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>Theme Switcher</h1>
        <Switch checked={theme === 'dark'} onToggle={toggleTheme} />
      </header>
      <main>
        <p>The current theme is {theme}.</p>
      </main>
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
