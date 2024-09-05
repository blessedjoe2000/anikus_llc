/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        outfit: ["Outfit", "Roboto", "sans-serif"],
        mukta: ["Mukta", "Roboto", "sans-serif"],
      },
      colors: {
        "light-green": "#d1e4dd",
        "mid-green": "#d8ffea",
        green: "#057538",
        "dark-green": "#3edf6a",
        "black-green": "#012311",
        cream: "#E2E2B6",
        "off-white": "#f7f7f7",
      },
    },
  },
  plugins: [],
};
