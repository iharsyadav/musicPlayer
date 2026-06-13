import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") || "light"
  );

  const [colorTheme, setColorTheme] = useState(
    localStorage.getItem("colorTheme") || "theme-default"
  );

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", mode === "dark");

    root.classList.remove(
      "theme-default",
      "theme-purple",
      "theme-green",
      "theme-blue"
    );

    root.classList.add(colorTheme);

    localStorage.setItem("mode", mode);
    localStorage.setItem("colorTheme", colorTheme);
  }, [mode, colorTheme]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        colorTheme,
        setColorTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}