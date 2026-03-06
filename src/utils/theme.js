const THEME_KEY = "site-theme";
const DEFAULT_THEME = "sunset";

export const setTheme = (theme) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
};

export const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
};

export const applyStoredTheme = () => {
  if (typeof document === "undefined") {
    return;
  }

  setTheme(getStoredTheme());
};
