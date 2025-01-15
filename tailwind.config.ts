import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutralGray: "#5f6368",
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
  plugins: [],
} satisfies Config;
