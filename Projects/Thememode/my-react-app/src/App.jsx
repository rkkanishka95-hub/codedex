import React, { createContext, useState, useContext } from "react";
import "./App.css";

// Create ThemeContext
export const ThemeContext = createContext();

// ThemeProvider to wrap around app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Header component
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <h1>React Theme Switcher ✨</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </button>
    </header>
  );
};

// Content component
const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`content ${theme}`}>
      <p>
        You are browsing in <strong>{theme.toUpperCase()} MODE</strong>
      </p>
    </main>
  );
};

// Main App
export default function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}
