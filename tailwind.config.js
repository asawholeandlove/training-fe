import theme from "./theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "512px", // Modify the 'sm' breakpoint
      },
    },
  },
  plugins: [],
};
