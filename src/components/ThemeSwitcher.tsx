import { useTheme } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-autumn-200 dark:bg-autumn-600 hover:bg-autumn-300 dark:hover:bg-autumn-500 transition-colors"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};
