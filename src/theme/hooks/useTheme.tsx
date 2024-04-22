import { useState } from "react";
import { Theme } from "../../models";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  const themeToggler = () => {
    const isDarkTheme = theme === Theme.DARK;
    setTheme(isDarkTheme ? Theme.LIGHT : Theme.DARK);
  };

  return { theme, themeToggler };
};
