/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#345ff6",
        gunmetal: "#253347",
        dark_blue: "#5e6e85",
        border: "#d8e2e7",
        white: "#ffff",
      },
    },
  },
};
