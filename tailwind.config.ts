import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutralGray: "var(--text-secondary)",
        textBlack: "var(--text-primary)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      textWrap: {
        balance: "balance",
      },
      backgroundImage: {
        "gradient-blue-green":
          "linear-gradient(90deg, #4285f4 35%, #2daeb8 90%)",
        "gradient-aqua": "linear-gradient(90deg, #d2e3fc 35%, #cbebed 90%)",
        "dark-gray": "rgb(60, 64, 67)",
        footer: "#f8f9fa",
      },
    },
  },
  plugins: [flowbitePlugin],
} satisfies Config;
