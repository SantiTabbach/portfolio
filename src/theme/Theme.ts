import { Theme } from "../models";

export const ThemeConfig = {
  dark: {
    icon: "#EEEEEE",
    key: Theme.DARK,
    background: "#222831",
    primary: "#5FC3BD",
    secondary: "#31363F",
    text: "#989AA0",
    subtitle: "#EEEEEE",
    shadow: "inset 0 0 40px 0 rgba(0, 0, 0, 0.8)",
    settings: {
      shadow: "inset 0 0 10px 0 rgba(0, 0, 0, 0.8)",
    },
    glassBox: {
      active: {
        background: "rgba(49, 54, 63, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.01)",
        boxShadow: "inset 0 1px 0 0 rgba(152, 154, 160, 0.05)",
      },
      footer: {
        borderTop: "0.5px solid rgba(255, 255, 255, 0.1)",
      },
    },
  },
  light: {
    icon: "#222831",
    key: Theme.LIGHT,
    background: "#EEEEEE",
    primary: "#2EA29B",
    secondary: "#D4D4D4",
    text: "#31363F",
    subtitle: "#222831",
    shadow: "inset 0 0 30px 0 rgba(11, 17, 31, 0.6)",
    settings: {
      shadow: "inset 0 0 10px 0 rgba(11, 17, 31, 0.6)",
    },
    glassBox: {
      active: {
        background: "rgba(152, 154, 160, 0.4)",
        border: "1px solid rgba(0,0,0, 0.01)",
        boxShadow: "inset 0 1px 0 0 rgba(49, 54, 63, 0.05)",
      },
      footer: {
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      },
    },
  },
};
