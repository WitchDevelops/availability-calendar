/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        autumn: {
          // Light theme colors
          50: "#faf4f1", // Lightest cream
          100: "#f3e5db", // Soft peach
          200: "#e8d0bc", // Warm sand
          300: "#dbb088", // Muted copper
          400: "#c68f54", // Warm caramel
          500: "#a85f2f", // Rich auburn
          600: "#8b4a28", // Deep rust
          700: "#693a24", // Dark coffee
          800: "#4a2a1c", // Deep brown
          900: "#2c1810", // Darkest brown

          // Accent colors
          sage: "#a3b18a", // Soft sage green
          leaf: "#728c69", // Sage green
          berry: "#9b4f58", // Muted raspberry
          gold: "#d4a373", // Warm gold
          moss: "#4a5d4e", // Dark moss
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-autumn-50": theme("colors.autumn.50"),
          "--color-autumn-100": theme("colors.autumn.100"),
          "--color-autumn-200": theme("colors.autumn.200"),
          "--color-autumn-300": theme("colors.autumn.300"),
          "--color-autumn-400": theme("colors.autumn.400"),
          "--color-autumn-500": theme("colors.autumn.500"),
          "--color-autumn-600": theme("colors.autumn.600"),
          "--color-autumn-700": theme("colors.autumn.700"),
          "--color-autumn-800": theme("colors.autumn.800"),
          "--color-autumn-900": theme("colors.autumn.900"),
          "--color-autumn-sage": theme("colors.autumn.sage"),
          "--color-autumn-leaf": theme("colors.autumn.leaf"),
          "--color-autumn-berry": theme("colors.autumn.berry"),
          "--color-autumn-gold": theme("colors.autumn.gold"),
          "--color-autumn-moss": theme("colors.autumn.moss"),
        },
      });
    },
  ],
};
