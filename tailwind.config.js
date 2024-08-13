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
    },
  },
  plugins: [],
};
