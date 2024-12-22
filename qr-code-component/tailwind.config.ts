import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--color-white)",
        slate: {
          light: "var(--color-slate-300)",
          medium: "var(--color-slate-500)",
          dark: "var(--color-slate-900)",
        },
      },
      fontFamily: {
        outfit: "var(--font-outfit)",
      },
    },
  },
  plugins: [],
} satisfies Config;
