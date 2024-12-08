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
        background: "#FFFFFF",
        backgroundDark: "#F2F2F2",
        foreground: "#000000",
        foregroundLight: "#F0F0F0",
        main: "#3CB371",
        notActive: "#85b49c",
        accent: "#4FD48A",
        hover: "#18AB77",
        click: "#00CE86",
      },
    },
  },
  plugins: [],
} satisfies Config;
