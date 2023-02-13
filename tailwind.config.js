/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: '#BD081C',
      secondary: '#EFEFEF',
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}
