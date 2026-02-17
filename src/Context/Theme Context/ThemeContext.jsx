// src/Contexts/ThemeContext.jsx
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [colorTheme, setColorTheme] = useState("blue");

  // localStorage se saved theme load karo
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);


     const savedColor = localStorage.getItem("colorTheme");
    if (savedColor) setColorTheme(savedColor);
  }, []);

  // body class apply karo
   useEffect(() => {
    document.body.className = `${theme} ${colorTheme}`;
    localStorage.setItem("theme", theme);
    localStorage.setItem("colorTheme", colorTheme);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
