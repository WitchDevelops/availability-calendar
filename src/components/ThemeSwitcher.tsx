import { useTheme } from "../context/theme/useTheme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-autumn-leaf dark:bg-autumn-moss hover:bg-autumn-moss dark:hover:bg-autumn-leaf transition-colors"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};
