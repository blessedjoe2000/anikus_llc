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
        satisfy: ["Satisfy", "Allura", "sans-serif"],
        allura: ["Allura", "Satisfy", "sans-serif"],
        kaushan: ["Kaushan", "Allura", "sans-serif"],
        bangers: ["Bangers", "Roboto", "sans-serif"],
      },
      colors: {
        "light-green": "#d1e4dd",
        "mid-green": "#d8ffea",
        "dark-green": "#3edf6a",
        "black-green": "#012311",
        cream: "#E2E2B6",
        "off-white": "#f7f7f7",
      },
    },
  },
  plugins: [],
};
