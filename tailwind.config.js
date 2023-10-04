/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif;", // Adds a new `font-display` class
      },
      colors: {
        "dark-2": "#403F3F",
        "dark-3": "#706F6F",
        "dark-4": "#9F9F9F",
        "dark-7": "#F3F3F3",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake"],
  },
};
