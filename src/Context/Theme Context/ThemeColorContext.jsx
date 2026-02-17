import { createContext, useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeColorContext = createContext();

export const ThemeColorProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("blue");

  const { theme } = useContext(ThemeContext); // get current theme

  useEffect(() => {
    const saved = localStorage.getItem("colorTheme");
    if (saved) setColorTheme(saved);
  }, []);

  useEffect(() => {
    document.body.className = `${theme} ${colorTheme}`; // BOTH classes
    localStorage.setItem("colorTheme", colorTheme);
  }, [colorTheme, theme]);

  return (
    <ThemeColorContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeColorContext.Provider>
  );
};
