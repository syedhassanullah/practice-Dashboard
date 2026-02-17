// src/Contexts/ThemeContext.jsx
import { createContext, useState, useEffect } from "react";

export const OneThemeContext = createContext();

export const OneThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [colorTheme, setColorTheme] = useState(() => {
    return localStorage.getItem("colorTheme") || "blue";
  });
  // Load from localStorage once
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) setTheme(savedTheme);

  //   const savedColor = localStorage.getItem("colorTheme");
  //   if (savedColor) setColorTheme(savedColor);
  // }, []);

  // Update body class whenever theme or color changes
  useEffect(() => {
    document.body.className = `${theme} ${colorTheme}`;
    localStorage.setItem("theme", theme);
    localStorage.setItem("colorTheme", colorTheme);
  }, [theme, colorTheme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <OneThemeContext.Provider value={{ theme, toggleTheme, colorTheme, setColorTheme }}>
      {children}
    </OneThemeContext.Provider>
  );
};
    