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
      },
    },
  },
  plugins: [flowbitePlugin],
} satisfies Config;
