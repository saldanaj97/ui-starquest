/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E2453",
        secondary: "2E6A9D",
        action: "#EA2A4F",
        actionHover: "#F97C5C",
      },
    },
  },
  plugins: [nextui()],
};
