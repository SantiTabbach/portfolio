import { useState } from "react";
import { Theme } from "../models/types";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const themeToggler = () => {
    const isDarkTheme = theme === "dark";
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return { theme, themeToggler };
};
