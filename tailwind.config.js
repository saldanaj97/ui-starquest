/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [],
};
