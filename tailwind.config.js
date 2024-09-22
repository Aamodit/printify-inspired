/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0056B3',
        secondary: '#F7F7F7',
        darkGray: '#4A4A4A',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
