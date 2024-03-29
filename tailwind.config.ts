import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "circularskill": "repeating-radial-gradient(#000 2px, #fff 5px, #fff 100px)",
      },
      fontFamily:{
        headText: ['var(--font-headText)'],
        bodyText: ['var(--font-bodyText)'],
        Montserrat: ['var(--font-Montserrat)']
      },
    },
  },
  plugins: [],
};
export default config;
