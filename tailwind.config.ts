import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // CBM brand palette — deep navy + gold accent (estate & trust feel).
        // Tweak these to match Sapphire United's actual brand colours.
        brand: {
          50: "#eef2f8",
          100: "#d6e0ef",
          200: "#aebfdc",
          300: "#7d97c2",
          400: "#5172a6",
          500: "#34548a",
          600: "#27406d",
          700: "#1f3357",
          800: "#16243d",
          900: "#0e182a",
        },
        gold: {
          400: "#d9b65c",
          500: "#c79f3e",
          600: "#a9842b",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "ui-serif", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
